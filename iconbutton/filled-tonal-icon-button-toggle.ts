/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';
import {ClassInfo} from 'lit/directives/class-map.js';

import {styles} from './lib/filled-tonal-styles.css.js';
import {IconButtonToggle} from './lib/icon-button-toggle.js';
import {styles as sharedStyles} from './lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-filled-tonal-icon-button-toggle': MdFilledTonalIconButtonToggle;
  }
}

/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap. This variant can toggle between icons.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
@customElement('md-filled-tonal-icon-button-toggle')
export class MdFilledTonalIconButtonToggle extends IconButtonToggle {
  static override styles = [sharedStyles, styles];

  protected override getRenderClasses(): ClassInfo {
    return {
      ...super.getRenderClasses(),
      'md3-icon-button--filled-tonal': true,
      'md3-icon-button--toggle-filled-tonal': true,
    };
  }
}
