# `ephemeralLocalCommand` Submodule <a name="`ephemeralLocalCommand` Submodule" id="@cdktn/provider-local.ephemeralLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralLocalCommand <a name="EphemeralLocalCommand" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer"></a>

```typescript
import { ephemeralLocalCommand } from '@cdktn/provider-local'

new ephemeralLocalCommand.EphemeralLocalCommand(scope: Construct, id: string, config: EphemeralLocalCommandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig">EphemeralLocalCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig">EphemeralLocalCommandConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowNonZeroExitCode` <a name="resetAllowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode"></a>

```typescript
public resetAllowNonZeroExitCode(): void
```

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetStdin` <a name="resetStdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin"></a>

```typescript
public resetStdin(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct"></a>

```typescript
import { ephemeralLocalCommand } from '@cdktn/provider-local'

ephemeralLocalCommand.EphemeralLocalCommand.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement"></a>

```typescript
import { ephemeralLocalCommand } from '@cdktn/provider-local'

ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralLocalCommand } from '@cdktn/provider-local'

ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr">stderr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout">stdout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput">allowNonZeroExitCodeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput">argumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput">commandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput">stdinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin">stdin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr"></a>

```typescript
public readonly stderr: string;
```

- *Type:* string

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout"></a>

```typescript
public readonly stdout: string;
```

- *Type:* string

---

##### `allowNonZeroExitCodeInput`<sup>Optional</sup> <a name="allowNonZeroExitCodeInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput"></a>

```typescript
public readonly allowNonZeroExitCodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* string

---

##### `stdinInput`<sup>Optional</sup> <a name="stdinInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput"></a>

```typescript
public readonly stdinInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `allowNonZeroExitCode`<sup>Required</sup> <a name="allowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode"></a>

```typescript
public readonly allowNonZeroExitCode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin"></a>

```typescript
public readonly stdin: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralLocalCommandConfig <a name="EphemeralLocalCommandConfig" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.Initializer"></a>

```typescript
import { ephemeralLocalCommand } from '@cdktn/provider-local'

const ephemeralLocalCommandConfig: ephemeralLocalCommand.EphemeralLocalCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command">command</a></code> | <code>string</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode">allowNonZeroExitCode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments">arguments</a></code> | <code>string[]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin">stdin</a></code> | <code>string</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `allowNonZeroExitCode`<sup>Optional</sup> <a name="allowNonZeroExitCode" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode"></a>

```typescript
public readonly allowNonZeroExitCode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin"></a>

```typescript
public readonly stdin: string;
```

- *Type:* string

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---



