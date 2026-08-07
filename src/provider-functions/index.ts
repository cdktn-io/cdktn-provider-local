/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the local provider.
*/
export class LocalProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Given a path string, will return true if the directory exists. This function works only with directories. If used with a file, the function will return an error.
  * 
  * This function behaves similar to the built-in [`fileexists`](https://developer.hashicorp.com/terraform/language/functions/fileexists) function, however, `direxists` will not replace filesystem paths including `~` with the current user's home directory path. This functionality can be achieved by using the built-in [`pathexpand`](https://developer.hashicorp.com/terraform/language/functions/pathexpand) function with `direxists`, see example below.
  * @param {string} path - Relative or absolute path to check for the existence of a directory
  * @returns {boolean | IResolvable}
  */
  public direxists(path: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "direxists", [path]);
  }
}
