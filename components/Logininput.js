
const LoginInput = (props) => (
<div class="input-group">
  <input {...props} class="form-control" required="required" placeholder={props.placeholder}/>
  <label for={props.name}>{props.label}</label>
  <div class="req-mark">!</div>
</div>
)

export default LoginInput;