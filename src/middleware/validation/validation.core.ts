import { celebrate, Joi, Segments } from "celebrate";

export const initValidation = () => {
  const self = {
    /**
     * Validação do corpo do user post
     */
    postUserBody: () => {
      return celebrate({
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          age: Joi.number().integer().required(),
        }),
      });
    },
  };

  return self;
};
