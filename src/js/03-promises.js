import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onButtonSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve({ position, delay }) : reject({ position, delay });
    }, delay);
  });
}

function onButtonSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;
  const delay1 = Number(delay.value);
  const step1 = Number(step.value);
  const amount1 = Number(amount.value);

  const promises = Array.from({ length: amount1 }, (_, index) => {
    const currentDelay = delay1 + index * step1;
    return createPromise(index + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  });

  Promise.all(promises)
    .then(() => {
      console.log('All success')
    })
    .catch((error) => {
      console.error('At least one promise was rejected:', error);
    });
}
