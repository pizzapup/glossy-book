//
// accessible control that communicates its change of state
// on-off is communicated by the label
// focusing the control announces: "Notify by email, checkbox, unchecked"
// label, role, state
import "./Checkbox.css";
export default function Checkbox(props) {
  return (
    <>
      <input type="checkbox" id="notify" name="notify" value="on" />
      <label htmlFor="notify">Notify by email</label>
    </>
  );
}
