
const LoginInput = (props) => (
<div class="input-group">
  <input {...props} class="form-control" name="text-1542372332072" id="text-1542372332072" required="required" placeholder={props.placeholder}/>
  <label for="text-1542372332072">{props.label}</label>
  <div class="req-mark">!</div>
</div>
)

export default LoginInput;