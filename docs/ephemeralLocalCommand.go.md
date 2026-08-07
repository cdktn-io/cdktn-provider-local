# `ephemeralLocalCommand` Submodule <a name="`ephemeralLocalCommand` Submodule" id="@cdktn/provider-local.ephemeralLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralLocalCommand <a name="EphemeralLocalCommand" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/ephemerallocalcommand"

ephemerallocalcommand.NewEphemeralLocalCommand(scope Construct, id *string, config EphemeralLocalCommandConfig) EphemeralLocalCommand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig">EphemeralLocalCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig">EphemeralLocalCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode">ResetAllowNonZeroExitCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin">ResetStdin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowNonZeroExitCode` <a name="ResetAllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode"></a>

```go
func ResetAllowNonZeroExitCode()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetStdin` <a name="ResetStdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin"></a>

```go
func ResetStdin()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory"></a>

```go
func ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/ephemerallocalcommand"

ephemerallocalcommand.EphemeralLocalCommand_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/ephemerallocalcommand"

ephemerallocalcommand.EphemeralLocalCommand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/ephemerallocalcommand"

ephemerallocalcommand.EphemeralLocalCommand_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr">Stderr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout">Stdout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput">AllowNonZeroExitCodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput">CommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput">StdinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin">Stdin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr"></a>

```go
func Stderr() *string
```

- *Type:* *string

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout"></a>

```go
func Stdout() *string
```

- *Type:* *string

---

##### `AllowNonZeroExitCodeInput`<sup>Optional</sup> <a name="AllowNonZeroExitCodeInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput"></a>

```go
func AllowNonZeroExitCodeInput() interface{}
```

- *Type:* interface{}

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput"></a>

```go
func CommandInput() *string
```

- *Type:* *string

---

##### `StdinInput`<sup>Optional</sup> <a name="StdinInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput"></a>

```go
func StdinInput() *string
```

- *Type:* *string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput"></a>

```go
func WorkingDirectoryInput() *string
```

- *Type:* *string

---

##### `AllowNonZeroExitCode`<sup>Required</sup> <a name="AllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode"></a>

```go
func AllowNonZeroExitCode() interface{}
```

- *Type:* interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Stdin`<sup>Required</sup> <a name="Stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin"></a>

```go
func Stdin() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralLocalCommandConfig <a name="EphemeralLocalCommandConfig" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-local-go/local/v14/ephemerallocalcommand"

&ephemerallocalcommand.EphemeralLocalCommandConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Command: *string,
	AllowNonZeroExitCode: interface{},
	Arguments: *[]*string,
	Stdin: *string,
	WorkingDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command">Command</a></code> | <code>*string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>interface{}</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments">Arguments</a></code> | <code>*[]*string</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin">Stdin</a></code> | <code>*string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command"></a>

```go
Command *string
```

- *Type:* *string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `AllowNonZeroExitCode`<sup>Optional</sup> <a name="AllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode"></a>

```go
AllowNonZeroExitCode interface{}
```

- *Type:* interface{}

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `Stdin`<sup>Optional</sup> <a name="Stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin"></a>

```go
Stdin *string
```

- *Type:* *string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory"></a>

```go
WorkingDirectory *string
```

- *Type:* *string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---



