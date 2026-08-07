# `ephemeralLocalCommand` Submodule <a name="`ephemeralLocalCommand` Submodule" id="@cdktn/provider-local.ephemeralLocalCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralLocalCommand <a name="EphemeralLocalCommand" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command local_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer"></a>

```python
from cdktn_provider_local import ephemeral_local_command

ephemeralLocalCommand.EphemeralLocalCommand(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  command: str,
  allow_non_zero_exit_code: bool | IResolvable = None,
  arguments: typing.List[str] = None,
  stdin: str = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.command">command</a></code> | <code>str</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.arguments">arguments</a></code> | <code>typing.List[str]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.stdin">stdin</a></code> | <code>str</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.command"></a>

- *Type:* str

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `allow_non_zero_exit_code`<sup>Optional</sup> <a name="allow_non_zero_exit_code" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.allowNonZeroExitCode"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.arguments"></a>

- *Type:* typing.List[str]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.stdin"></a>

- *Type:* str

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.Initializer.parameter.workingDirectory"></a>

- *Type:* str

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode">reset_allow_non_zero_exit_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin">reset_stdin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_non_zero_exit_code` <a name="reset_allow_non_zero_exit_code" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetAllowNonZeroExitCode"></a>

```python
def reset_allow_non_zero_exit_code() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_stdin` <a name="reset_stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetStdin"></a>

```python
def reset_stdin() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isConstruct"></a>

```python
from cdktn_provider_local import ephemeral_local_command

ephemeralLocalCommand.EphemeralLocalCommand.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement"></a>

```python
from cdktn_provider_local import ephemeral_local_command

ephemeralLocalCommand.EphemeralLocalCommand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_local import ephemeral_local_command

ephemeralLocalCommand.EphemeralLocalCommand.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode">exit_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr">stderr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout">stdout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput">allow_non_zero_exit_code_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput">command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput">stdin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin">stdin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `exit_code`<sup>Required</sup> <a name="exit_code" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.exitCode"></a>

```python
exit_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stderr"></a>

```python
stderr: str
```

- *Type:* str

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdout"></a>

```python
stdout: str
```

- *Type:* str

---

##### `allow_non_zero_exit_code_input`<sup>Optional</sup> <a name="allow_non_zero_exit_code_input" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCodeInput"></a>

```python
allow_non_zero_exit_code_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.commandInput"></a>

```python
command_input: str
```

- *Type:* str

---

##### `stdin_input`<sup>Optional</sup> <a name="stdin_input" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdinInput"></a>

```python
stdin_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `allow_non_zero_exit_code`<sup>Required</sup> <a name="allow_non_zero_exit_code" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.allowNonZeroExitCode"></a>

```python
allow_non_zero_exit_code: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `stdin`<sup>Required</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.stdin"></a>

```python
stdin: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralLocalCommandConfig <a name="EphemeralLocalCommandConfig" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.Initializer"></a>

```python
from cdktn_provider_local import ephemeral_local_command

ephemeralLocalCommand.EphemeralLocalCommandConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  command: str,
  allow_non_zero_exit_code: bool | IResolvable = None,
  arguments: typing.List[str] = None,
  stdin: str = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command">command</a></code> | <code>str</code> | Executable name to be discovered on the PATH or absolute path to executable. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode">allow_non_zero_exit_code</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the command returning a non-zero exit code should be treated as a successful execution. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Arguments to be passed to the given command. Any `null` arguments will be removed from the list. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin">stdin</a></code> | <code>str</code> | Data to be passed to the given command's standard input as a UTF-8 string. |
| <code><a href="#@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.command"></a>

```python
command: str
```

- *Type:* str

Executable name to be discovered on the PATH or absolute path to executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#command EphemeralLocalCommand#command}

---

##### `allow_non_zero_exit_code`<sup>Optional</sup> <a name="allow_non_zero_exit_code" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.allowNonZeroExitCode"></a>

```python
allow_non_zero_exit_code: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the command returning a non-zero exit code should be treated as a successful execution.

Further assertions can be made of the `exit_code` value with the [`check` block](https://developer.hashicorp.com/terraform/language/block/check). Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#allow_non_zero_exit_code EphemeralLocalCommand#allow_non_zero_exit_code}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to be passed to the given command. Any `null` arguments will be removed from the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#arguments EphemeralLocalCommand#arguments}

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.stdin"></a>

```python
stdin: str
```

- *Type:* str

Data to be passed to the given command's standard input as a UTF-8 string.

[Terraform values](https://developer.hashicorp.com/terraform/language/expressions/types) can be encoded by any Terraform encode function, for example, [`jsonencode`](https://developer.hashicorp.com/terraform/language/functions/jsonencode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#stdin EphemeralLocalCommand#stdin}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-local.ephemeralLocalCommand.EphemeralLocalCommandConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

The directory path where the command should be executed, either an absolute path or relative to the Terraform working directory.

If not provided, defaults to the Terraform working directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/local/2.9.0/docs/ephemeral-resources/command#working_directory EphemeralLocalCommand#working_directory}

---



