import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryData: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
    e.preventDefault();

    const countries = e.target.value.trim();

    if (!countries) {
        refs.countriesList.innerHTML = '';
        refs.countryData.innerHTML = '';
        return;
    }

    fetchCountries(countries).then(countries => {
        if (countries.length > 10) {
            refs.countriesList.innerHTML = '';
            refs.countryData.innerHTML = '';
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
        if (countries.length >= 2 && countries.length <= 10) {
            refs.countriesList.innerHTML = '';
            refs.countryData.innerHTML = '';
            addingCountryName(countries);
        }
        if (countries.length === 1) {
            refs.countriesList.innerHTML = '';
            refs.countryData.innerHTML = '';
            addingCountryData(countries);
            addingCountryName(countries);
        }
    }).catch(error => Notiflix.Notify.failure('Oops, there is no country with that name')
    )
}


function addingCountryName(arrayCountryName) {
    const countryCard = arrayCountryName.map(({ name, flags }) => {
        return `<li><img src="${flags.svg}" alt="${name.official}" width="60" height="45"><span>${name.official}</span></li>`
    }).join('');
    refs.countriesList.innerHTML = countryCard;
}


function addingCountryData(countryData) {
    const countryCardData = countryData.map(({ capital, population, languages }) => {
        return `<p>Capital: ${capital}</p> 
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages)}</p>`
    }).join('');
    refs.countryData.innerHTML = countryCardData;
} 