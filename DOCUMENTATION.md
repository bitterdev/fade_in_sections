## Fade In Sections Usage Guide

This Concrete CMS extension provides a fade-in animation for elements when they enter the viewport. The animation behavior is controlled through CSS classes, with sensible fallback values for optional settings.

## Usage

1. Apply the required `.fade-in` class to any element that should animate in the Design & Block Template Settings.
2. Optionally, add additional classes to customize the animation's opacity, offset, duration, and delay.

## Optional Classes

These classes are optional and modify the animation behavior. If not specified, default values are used. All numeric values are supported for the following prefixes.

- **Initial Opacity**:

    - `.opacity-[value]`: Starts the animation with the specified opacity (e.g., `.opacity-0-5` for 0.5, `.opacity-1-0` for 1.0). Default: `0`.

- **Vertical Offset**:

    - `.offset-[value]`: Starts the animation `[value]` pixels below the final position (e.g., `.offset-50` for 50px). Default: `24`.

- **Animeation Duration**:

    - `.duration-[value]`: Animation lasts `[value]` milliseconds (e.g., `.duration-1000` for 1000ms). Default: `1250`.

- **Animation Delay**:

    - `.delay-[value]`: Animation starts after `[value]` milliseconds delay (e.g., `.delay-200` for 200ms). Default: `0`.

### Example

```html
<div>
  <div class="fade-in">Fades in with default settings</div>
  <div class="fade-in opacity-0-7 offset-100 duration-1500 delay-300">
    Fades in with custom opacity, offset, duration, and delay
  </div>
</div>