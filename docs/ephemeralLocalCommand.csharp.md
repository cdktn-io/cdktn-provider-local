# `ephemeralLocalCommand` Submodule <a name="`ephemeralLocalCommand` Submodule" id="@cdktn/provider-local.ephemeralLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralLocalCommand <a name="EphemeralLocalCommand" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Local;

new EphemeralLocalCommand(Construct Scope, string Id, EphemeralLocalCommandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig">EphemeralLocalCommandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowNonZeroExitCode` <a name="ResetAllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode"></a>

```csharp
private void ResetAllowNonZeroExitCode()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetStdin` <a name="ResetStdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin"></a>

```csharp
private void ResetStdin()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Local;

EphemeralLocalCommand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Local;

EphemeralLocalCommand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Local;

EphemeralLocalCommand.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode">ExitCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr">Stderr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout">Stdout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput">AllowNonZeroExitCodeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput">CommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput">StdinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin">Stdin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode"></a>

```csharp
public double ExitCode { get; }
```

- *Type:* double

---

##### `Stderr`<sup>Required</sup> <a name="Stderr" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr"></a>

```csharp
public string Stderr { get; }
```

- *Type:* string

---

##### `Stdout`<sup>Required</sup> <a name="Stdout" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout"></a>

```csharp
public string Stdout { get; }
```

- *Type:* string

---

##### `AllowNonZeroExitCodeInput`<sup>Optional</sup> <a name="AllowNonZeroExitCodeInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCodeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput"></a>

```csharp
public string CommandInput { get; }
```

- *Type:* string

---

##### `StdinInput`<sup>Optional</sup> <a name="StdinInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput"></a>

```csharp
public string StdinInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `AllowNonZeroExitCode`<sup>Required</sup> <a name="AllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Stdin`<sup>Required</sup> <a name="Stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin"></a>

```csharp
public string Stdin { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralLocalCommandConfig <a name="EphemeralLocalCommandConfig" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Local;

new EphemeralLocalCommandConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Command,
    bool|IResolvable AllowNonZeroExitCode = null,
    string[] Arguments = null,
    string Stdin = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command">Command</a></code> | <code>string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode">AllowNonZeroExitCode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments">Arguments</a></code> | <code>string[]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin">Stdin</a></code> | <code>string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `AllowNonZeroExitCode`<sup>Optional</sup> <a name="AllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode"></a>

```csharp
public bool|IResolvable AllowNonZeroExitCode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `Stdin`<sup>Optional</sup> <a name="Stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin"></a>

```csharp
public string Stdin { get; set; }
```

- *Type:* string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---



