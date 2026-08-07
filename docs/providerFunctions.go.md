# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-local.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### LocalProviderFunctions <a name="LocalProviderFunctions" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions"></a>

Provider-defined functions of the local provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/providerfunctions"

providerfunctions.NewLocalProviderFunctions(providerLocalName *string) LocalProviderFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>*string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* *string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists">Direxists</a></code> | Given a path string, will return true if the directory exists. |

---

##### `Direxists` <a name="Direxists" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists"></a>

```go
func Direxists(path *string) IResolvable
```

Given a path string, will return true if the directory exists.

This function works only with directories. If used with a file, the function will return an error.

This function behaves similar to the built-in [`fileexists`](https://developer.hashicorp.com/terraform/language/functions/fileexists) function, however, `direxists` will not replace filesystem paths including `~` with the current user's home directory path. This functionality can be achieved by using the built-in [`pathexpand`](https://developer.hashicorp.com/terraform/language/functions/pathexpand) function with `direxists`, see example below.

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.providerFunctions.LocalProviderFunctions.direxists.parameter.path"></a>

- *Type:* *string

Relative or absolute path to check for the existence of a directory.

---





