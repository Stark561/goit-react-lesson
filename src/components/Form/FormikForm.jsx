import { Component } from 'react';
import { Formik } from 'formik';

class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={values => {
          this.props.addUser(values);
          this.props.closeForm();
        }}
      >
        {formik => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <label>
                Name
                <input
                  onChange={formik.handleChange}
                  type="text"
                  name="name"
                  value={formik.values.name}
                />
              </label>

              <label>
                Email{' '}
                <input
                  onChange={formik.handleChange}
                  type="email"
                  name="email"
                  value={formik.values.email}
                />
              </label>

              <button type="submit">Save</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default FormikForm;
