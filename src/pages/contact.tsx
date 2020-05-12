import { h } from "../parts/jsx";

export default (
    <div class="text-center">
        <h1>Get in touch!</h1>
        <div class="kwes-form text-center d-inline-block">
            <form
                method="POST"
                action="https://kwes.io/api/foreign/forms/8W5Amk93josBJB5U5B3z"
            >
                <div class="input-group">
                    <label for="#firstNameInput">First Name:</label>
                    <br />
                    <input
                        type="text"
                        id="firstNameInput"
                        placeholder="Type here..."
                        name="First Name"
                        rules="required|alpha"
                    ></input>
                </div>

                <div class="input-group">
                    <label for="#lastNameInput">Last Name:</label>
                    <br />
                    <input
                        type="text"
                        id="lastNameInput"
                        placeholder="Type here..."
                        name="Last Name"
                        rules="required|alpha"
                    ></input>
                </div>

                <br />

                <div class="input-group">
                    <label for="#emailInput">Email Address:</label>
                    <br />
                    <input
                        type="text"
                        id="emailInput"
                        placeholder="Type here..."
                        name="Email"
                        rules="required|email"
                    ></input>
                </div>

                <div class="input-group">
                    <label for="#subjectInput">Subject:</label>
                    <br />
                    <select id="subjectInput" name="Subject" rules="required">
                        <option value="Say Hi!">Say Hi!</option>
                        <option value="Ask a Question.">Ask a Question.</option>
                        <option value="Other.">Other.</option>
                    </select>
                </div>

                <br />

                <div class="input-group">
                    <label for="#messageInput">Message Body:</label>
                    <br />
                    <textarea
                        id="messageInput"
                        placeholder="Type here..."
                        name="Body"
                        rules="required"
                    ></textarea>
                </div>

                <br />
                <div class="input-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        <style data-desc="Override all default form styles that are ugly.">{`
            .kw-form-wrapper {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
            }

            [class*="kw-message-"], [class*="kw-message-"] * {
                color: var(--background) !important;
                font-family: "IBM Plex Mono", monospace;
                font-weight: bold;
            } 

            [class*="kw-message-"] {
                text-align: center;
                margin: 1rem 0;
                vertical-align: top;
                display: inline-block !important;
                max-width: 15rem;
            }

            .kwes-form small { max-width: 0 !important; overflow: hidden; }
    `}</style>
    </div>
);