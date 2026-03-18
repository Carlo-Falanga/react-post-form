import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  function handlerSubmit(e) {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log(res.data);
        setFormData({
          author: "",
          title: "",
          body: "",
          public: false,
        });
      });
  }

  function handlerFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  return (
    <>
      <section className="container">
        <form className="mt-5" onSubmit={handlerSubmit}>
          {/* Name imput */}
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Author Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={formData.author}
                onChange={handlerFormData}
              />
            </div>
          </div>
          {/* Title imput */}
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handlerFormData}
              />
            </div>
          </div>

          {/* Text body imput */}
          <div className="row mb-3">
            <label className="form-label col-sm-2 col-form-label">
              Text body
            </label>

            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="body"
                name="body"
                value={formData.body}
                rows="5"
                onChange={handlerFormData}
              ></textarea>
            </div>
          </div>

          {/* Checkboxes */}
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0"></legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="public"
                  id="public"
                  value="public"
                  checked={formData.public}
                  onChange={handlerFormData}
                />
                <label className="form-check-label">Public</label>
              </div>
            </div>
          </fieldset>

          {/* form button */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
