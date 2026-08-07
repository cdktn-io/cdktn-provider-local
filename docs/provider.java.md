# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-local.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocalProvider <a name="LocalProvider" id="@cdktn/provider-local.provider.LocalProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs local}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.provider.LocalProvider.Initializer"></a>

```java
import io.cdktn.providers.local.provider.LocalProvider;

LocalProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-local.provider.LocalProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs#alias LocalProvider#alias}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-local.provider.LocalProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-local.provider.LocalProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-local.provider.LocalProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-local.provider.LocalProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.provider.LocalProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-local.provider.LocalProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-local.provider.LocalProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-local.provider.LocalProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-local.provider.LocalProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-local.provider.LocalProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-local.provider.LocalProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-local.provider.LocalProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-local.provider.LocalProvider.resetAlias"></a>

```java
public void resetAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LocalProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-local.provider.LocalProvider.isConstruct"></a>

```java
import io.cdktn.providers.local.provider.LocalProvider;

LocalProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.provider.LocalProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-local.provider.LocalProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.local.provider.LocalProvider;

LocalProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.provider.LocalProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-local.provider.LocalProvider.isTerraformProvider"></a>

```java
import io.cdktn.providers.local.provider.LocalProvider;

LocalProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.provider.LocalProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-local.provider.LocalProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.local.provider.LocalProvider;

LocalProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LocalProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LocalProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.provider.LocalProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-local.provider.LocalProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LocalProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-local.provider.LocalProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LocalProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.provider.LocalProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LocalProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.functions">functions</a></code> | <code>io.cdktn.providers.local.provider_functions.LocalProviderFunctions</code> | Provider-defined functions of the local provider. |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-local.provider.LocalProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-local.provider.LocalProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-local.provider.LocalProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-local.provider.LocalProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-local.provider.LocalProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-local.provider.LocalProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-local.provider.LocalProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-local.provider.LocalProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-local.provider.LocalProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-local.provider.LocalProvider.property.functions"></a>

```java
public LocalProviderFunctions getFunctions();
```

- *Type:* io.cdktn.providers.local.provider_functions.LocalProviderFunctions

Provider-defined functions of the local provider.

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-local.provider.LocalProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-local.provider.LocalProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LocalProviderConfig <a name="LocalProviderConfig" id="@cdktn/provider-local.provider.LocalProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.provider.LocalProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.local.provider.LocalProviderConfig;

LocalProviderConfig.builder()
//  .alias(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.provider.LocalProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-local.provider.LocalProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs#alias LocalProvider#alias}

---



