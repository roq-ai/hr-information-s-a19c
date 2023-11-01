import * as yup from 'yup';

export const reimbursementValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  request_date: yup.date().required(),
  employee_id: yup.string().nullable().required(),
});
