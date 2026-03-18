import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    textBody: '',
    status: '',
  });

  function handlerSubmit(e) {
    e.preventDefault();
  }

  function handlerFormData(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  console.log(formData);
  
  

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
                id="name"
                name= 'name'
                value={formData.name}
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
                name='title'
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
                id="textBody"
                name= 'textBody'
                value={formData.textBody}
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
                  type="radio"
                  name="status"
                  id="public"
                  value="public"
                  checked= {formData.status === 'public'}
                  onChange={handlerFormData}
                />
                <label className="form-check-label">Public</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="draft"
                  value="draft"
                  checked={formData.status === 'draft'}
                  onChange={handlerFormData}
                />
                <label className="form-check-label">Draft</label>
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
