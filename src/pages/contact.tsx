import { h, Fragment } from "../parts/jsx";

export default <Fragment>
    <div class="kwes-form">
        <form method="POST" action="https://kwes.io/api/foreign/forms/8W5Amk93josBJB5U5B3z">
            <label for="name">Your Name</label>
            <input type="text" name="name" rules="required|max:255" />

            <button type="submit">Submit</button>
        </form>
    </div>
</Fragment>