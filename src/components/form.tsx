import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchSnapshot } from '../redux/actions';
import { Dispatch, FormValues } from '../types';

function Form() {
  const [formValues, setFormValues] = useState<FormValues>({
    url: '',
    year: '',
    month: '',
    day: '',
    hour: '',
  });
  const dispatch: Dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClick = async () => {
    dispatch(searchSnapshot(formValues));
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex w-100">
          <input
            className="form-control me-2"
            placeholder="URL"
            aria-label="Pesquisar"
            type="text"
            id="url"
            name="url"
            value={ formValues.url }
            onChange={ handleChange }
          />
          <div className="form-group me-2">
            <input
              className="form-control"
              placeholder="Ano"
              aria-label="Year"
              type="text"
              id="year"
              name="year"
              value={ formValues.year }
              onChange={ handleChange }
            />
          </div>
          <div className="form-group me-2">
            <input
              className="form-control"
              placeholder="Mês"
              aria-label="Month"
              type="text"
              id="month"
              name="month"
              value={ formValues.month }
              onChange={ handleChange }
            />
          </div>
          <div className="form-group me-2">
            <input
              className="form-control"
              placeholder="Dia"
              aria-label="Day"
              type="text"
              id="day"
              name="day"
              value={ formValues.day }
              onChange={ handleChange }
            />
          </div>
          <div className="form-group me-2">
            <input
              className="form-control"
              placeholder="Hora"
              aria-label="Hour"
              type="text"
              id="hour"
              name="hour"
              value={ formValues.hour }
              onChange={ handleChange }
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={ handleClick }
          >
            Procurar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Form;
