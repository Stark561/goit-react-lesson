import { Component } from 'react';
import { Formik } from 'formik';

class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ firstName: '', email: '' }}
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
                  name="firstName"
                  value={formik.values.firstName}
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
