# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-local.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### LocalProviderFunctions <a name="LocalProviderFunctions" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions"></a>

Provider-defined functions of the local provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer"></a>

```python
from cdktn_provider_local import provider_functions

providerFunctions.LocalProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists">direxists</a></code> | Given a path string, will return true if the directory exists. |

---

##### `direxists` <a name="direxists" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists"></a>

```python
def direxists(
  path: str
) -> IResolvable
```

Given a path string, will return true if the directory exists.

This function works only with directories. If used with a file, the function will return an error.

This function behaves similar to the built-in [`fileexists`](https://developer.hashicorp.com/terraform/language/functions/fileexists) function, however, `direxists` will not replace filesystem paths including `~` with the current user's home directory path. This functionality can be achieved by using the built-in [`pathexpand`](https://developer.hashicorp.com/terraform/language/functions/pathexpand) function with `direxists`, see example below.

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists.parameter.path"></a>

- *Type:* str

Relative or absolute path to check for the existence of a directory.

---





