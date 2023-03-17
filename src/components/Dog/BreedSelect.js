import { useState, useEffect } from "react";
import Select from "react-select";
import { fetchBreeds } from '../../servises/dogApi';
import { ErrorMessage } from "./ErrorMessage";

export const BreedSelect = ({ onSelect }) => {
    const [breeds, setBreeds] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDogBreeds() {
            try {
                setIsLoading(true);
                setError(null);
                const breeds = await fetchBreeds();
                setBreeds(breeds);
            } catch (error) {
                setError('Щось пішло не так, перезавантажте сторінку, раптом допоможе :).')
            } finally {
                setIsLoading(false);
            }
        };
        fetchDogBreeds();
    }, []);

    const options = breeds.map(breed => ({
        label: breed.name,
        value: breed.id,
    }));

    return (
        <div>
            <Select 
                options={options}
                isLoading={isLoading} 
                onChange={option => onSelect(option.value)} 
            />
            {isLoading && <div>Loading...</div>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};