# `sensitiveFile` Submodule <a name="`sensitiveFile` Submodule" id="@cdktn/provider-local.sensitiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveFile <a name="SensitiveFile" id="@cdktn/provider-local.sensitiveFile.SensitiveFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file local_sensitive_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Local;

new SensitiveFile(Construct Scope, string Id, SensitiveFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig">SensitiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission">ResetDirectoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetFilePermission">ResetFilePermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetDirectoryPermission` <a name="ResetDirectoryPermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetDirectoryPermission"></a>

```csharp
private void ResetDirectoryPermission()
```

##### `ResetFilePermission` <a name="ResetFilePermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetFilePermission"></a>

```csharp
private void ResetFilePermission()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SensitiveFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Local;

SensitiveFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Local;

SensitiveFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Local;

SensitiveFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Local;

SensitiveFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SensitiveFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SensitiveFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SensitiveFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SensitiveFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256">ContentBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentMd5">ContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha1">ContentSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha512">ContentSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput">DirectoryPermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput">FilePermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission">DirectoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filePermission">FilePermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContentBase64Sha256`<sup>Required</sup> <a name="ContentBase64Sha256" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha256"></a>

```csharp
public string ContentBase64Sha256 { get; }
```

- *Type:* string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Sha512"></a>

```csharp
public string ContentBase64Sha512 { get; }
```

- *Type:* string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; }
```

- *Type:* string

---

##### `ContentSha1`<sup>Required</sup> <a name="ContentSha1" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha1"></a>

```csharp
public string ContentSha1 { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `ContentSha512`<sup>Required</sup> <a name="ContentSha512" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentSha512"></a>

```csharp
public string ContentSha512 { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DirectoryPermissionInput`<sup>Optional</sup> <a name="DirectoryPermissionInput" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.directoryPermissionInput"></a>

```csharp
public string DirectoryPermissionInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `FilePermissionInput`<sup>Optional</sup> <a name="FilePermissionInput" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filePermissionInput"></a>

```csharp
public string FilePermissionInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `DirectoryPermission`<sup>Required</sup> <a name="DirectoryPermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.directoryPermission"></a>

```csharp
public string DirectoryPermission { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `FilePermission`<sup>Required</sup> <a name="FilePermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.filePermission"></a>

```csharp
public string FilePermission { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-local.sensitiveFile.SensitiveFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveFileConfig <a name="SensitiveFileConfig" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Local;

new SensitiveFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filename,
    string Content = null,
    string ContentBase64 = null,
    string DirectoryPermission = null,
    string FilePermission = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.filename">Filename</a></code> | <code>string</code> | The path to the file that will be created. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.content">Content</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be a UTF-8 encoded string. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Sensitive Content to store in the file, expected to be binary encoded as base64 string. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission">DirectoryPermission</a></code> | <code>string</code> | Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission">FilePermission</a></code> | <code>string</code> | Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`. |
| <code><a href="#@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.source">Source</a></code> | <code>string</code> | Path to file to use as source for the one we are creating. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

The path to the file that will be created.

Missing parent directories will be created.
If the file already exists, it will be overridden with the given content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#filename SensitiveFile#filename}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Sensitive Content to store in the file, expected to be a UTF-8 encoded string.

Conflicts with `content_base64` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#content SensitiveFile#content}

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Sensitive Content to store in the file, expected to be binary encoded as base64 string.

Conflicts with `content` and `source`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#content_base64 SensitiveFile#content_base64}

---

##### `DirectoryPermission`<sup>Optional</sup> <a name="DirectoryPermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.directoryPermission"></a>

```csharp
public string DirectoryPermission { get; set; }
```

- *Type:* string

Permissions to set for directories created (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#directory_permission SensitiveFile#directory_permission}

---

##### `FilePermission`<sup>Optional</sup> <a name="FilePermission" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.filePermission"></a>

```csharp
public string FilePermission { get; set; }
```

- *Type:* string

Permissions to set for the output file (before umask), expressed as string in  [numeric notation](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation).  Default value is `"0700"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#file_permission SensitiveFile#file_permission}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-local.sensitiveFile.SensitiveFileConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Path to file to use as source for the one we are creating.

Conflicts with `content` and `content_base64`.
Exactly one of these three arguments must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/resources/sensitive_file#source SensitiveFile#source}

---



