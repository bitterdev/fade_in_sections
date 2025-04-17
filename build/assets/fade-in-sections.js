"use strict"

class FadeInSections {
    constructor() {
        this.setVars();
        this.init();
    }

    // build animation keyframes, default values if undefined arguments
    appearAnim(opacity = 0, offset = 24) {
        return [
            {
                opacity: parseFloat(opacity),
                transform: `translateY(${parseInt(offset)}px)`
            },
            { opacity: 1, transform: "translateY(0)" }
        ];
    }

    // build animation options, default values if undefined arguments
    appearOptions(duration = 1250, delay = 0) {
        return {
            duration: parseInt(duration),
            fill: "both",
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            delay: parseInt(delay)
        };
    }

    setVars() {
        this.observerElements = document.querySelectorAll('.ccm-page .fade-in');
        this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                const opacityMatch = [...el.classList].find(cls => cls.startsWith('opacity-'))?.match(/opacity-(\d+-\d+)/)?.[1].replace('-', '.') || 0;
                const offsetMatch = [...el.classList].find(cls => cls.startsWith('offset-'))?.match(/offset-(\d+)/)?.[1] || 24;
                const durationMatch = [...el.classList].find(cls => cls.startsWith('duration-'))?.match(/duration-(\d+)/)?.[1] || 1250;
                const delayMatch = [...el.classList].find(cls => cls.startsWith('delay-'))?.match(/delay-(\d+)/)?.[1] || 0;

                let animation = el.animate(
                    this.appearAnim(opacityMatch, offsetMatch),
                    this.appearOptions(durationMatch, delayMatch)
                );

                animation.pause();

                if (entry.isIntersecting) {
                    animation.play();
                    this.observer.unobserve(el);
                }
            });
        }, this.observerOptions);
    }

    init() {
        if (this.observerElements.length > 0) {
            this.observerElements.forEach((el) => {
                this.observer.observe(el);
            });
        }
    }
}

// Initialize on DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    if (!CCM_EDIT_MODE) {
        new FadeInSections();
    }
});