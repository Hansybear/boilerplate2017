export default function loggerMiddleware(store) {
  return next => action => {
    console.log(action);
    console.log(store);
    return next(action);
  };
}
