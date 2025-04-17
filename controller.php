<?php

namespace Concrete\Package\FadeInSections;

use Concrete\Core\Asset\AssetInterface;
use Concrete\Core\Asset\AssetList;
use Concrete\Core\Package\Package;
use Concrete\Core\Page\Page;
use Concrete\Core\View\View;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class Controller extends Package
{
    protected string $pkgHandle = 'fade_in_sections';
    protected string $pkgVersion = '0.0.1';
    protected $appVersionRequired = '9.0.0';

    public function getPackageDescription(): string
    {
        return t('Fade In Sections is a Concrete CMS extension that adds smooth fade-in animations to elements as they appear on the screen.');
    }

    public function getPackageName(): string
    {
        return t('Fade In Sections');
    }

    public function on_start()
    {
        $al = AssetList::getInstance();
        $al->register("javascript", "fade-in-sections", "js/fade-in-sections.js", ["position" => AssetInterface::ASSET_POSITION_FOOTER], "fade_in_sections");

        /** @var EventDispatcherInterface $eventDispatcher */
        /** @noinspection PhpUnhandledExceptionInspection */
        $eventDispatcher = $this->app->make(EventDispatcherInterface::class);

        $eventDispatcher->addListener("on_before_render", function () {
            $c = Page::getCurrentPage();

            if ($c instanceof Page && !$c->isError() && !$c->isSystemPage()) {
                $v = View::getInstance();
                $v->requireAsset("javascript", "fade-in-sections");
            }
        });
    }
}