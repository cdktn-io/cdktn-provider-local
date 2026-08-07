# `ephemeralLocalCommand` Submodule <a name="`ephemeralLocalCommand` Submodule" id="@cdktn/provider-local.ephemeralLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralLocalCommand <a name="EphemeralLocalCommand" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer"></a>

```java
import io.cdktn.providers.local.ephemeral_local_command.EphemeralLocalCommand;

EphemeralLocalCommand.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .command(java.lang.String)
//  .allowNonZeroExitCode(java.lang.Boolean|IResolvable)
//  .arguments(java.util.List<java.lang.String>)
//  .stdin(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.command">command</a></code> | <code>java.lang.String</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.stdin">stdin</a></code> | <code>java.lang.String</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.command"></a>

- *Type:* java.lang.String

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.allowNonZeroExitCode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.arguments"></a>

- *Type:* java.util.List<java.lang.String>

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.stdin"></a>

- *Type:* java.lang.String

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.workingDirectory"></a>

- *Type:* java.lang.String

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode">resetAllowNonZeroExitCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin">resetStdin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowNonZeroExitCode` <a name="resetAllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode"></a>

```java
public void resetAllowNonZeroExitCode()
```

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetStdin` <a name="resetStdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin"></a>

```java
public void resetStdin()
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory"></a>

```java
public void resetWorkingDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct"></a>

```java
import io.cdktn.providers.local.ephemeral_local_command.EphemeralLocalCommand;

EphemeralLocalCommand.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement"></a>

```java
import io.cdktn.providers.local.ephemeral_local_command.EphemeralLocalCommand;

EphemeralLocalCommand.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.local.ephemeral_local_command.EphemeralLocalCommand;

EphemeralLocalCommand.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode">exitCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr">stderr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout">stdout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput">allowNonZeroExitCodeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput">commandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput">stdinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command">command</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin">stdin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode"></a>

```java
public java.lang.Number getExitCode();
```

- *Type:* java.lang.Number

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr"></a>

```java
public java.lang.String getStderr();
```

- *Type:* java.lang.String

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout"></a>

```java
public java.lang.String getStdout();
```

- *Type:* java.lang.String

---

##### `allowNonZeroExitCodeInput`<sup>Optional</sup> <a name="allowNonZeroExitCodeInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCodeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput"></a>

```java
public java.lang.String getCommandInput();
```

- *Type:* java.lang.String

---

##### `stdinInput`<sup>Optional</sup> <a name="stdinInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput"></a>

```java
public java.lang.String getStdinInput();
```

- *Type:* java.lang.String

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput"></a>

```java
public java.lang.String getWorkingDirectoryInput();
```

- *Type:* java.lang.String

---

##### `allowNonZeroExitCode`<sup>Required</sup> <a name="allowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin"></a>

```java
public java.lang.String getStdin();
```

- *Type:* java.lang.String

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralLocalCommandConfig <a name="EphemeralLocalCommandConfig" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.Initializer"></a>

```java
import io.cdktn.providers.local.ephemeral_local_command.EphemeralLocalCommandConfig;

EphemeralLocalCommandConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .command(java.lang.String)
//  .allowNonZeroExitCode(java.lang.Boolean|IResolvable)
//  .arguments(java.util.List<java.lang.String>)
//  .stdin(java.lang.String)
//  .workingDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command">command</a></code> | <code>java.lang.String</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin">stdin</a></code> | <code>java.lang.String</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory">workingDirectory</a></code> | <code>java.lang.String</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonZeroExitCode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin"></a>

```java
public java.lang.String getStdin();
```

- *Type:* java.lang.String

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory"></a>

```java
public java.lang.String getWorkingDirectory();
```

- *Type:* java.lang.String

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---



