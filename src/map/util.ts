import type { ImageSource } from 'react-native-vector-icons/Icon';
import { windowHeight, windowWidth } from '@tisf/rn-providers';

export const locationPin: ImageSource = {
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAC0CAYAAABfTugdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTIyVDA0OjExOjE2KzA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0yMlQwNDo1OToxMCswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNC0yMlQwNDo1OToxMCswNTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MDUxZjJjMC05ZTZiLTNh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',
};
export const LATITUDE_DELTA = 0.28;
export const LONGITUDE_DELTA = LATITUDE_DELTA * (windowWidth / windowHeight);