import { useEffect, useState } from "react";
import DashReVewTable from "./DashReVewTable.jsx";
import Pager from "../../../../components/tools/Pager/Pager.jsx";
import { useAlertContext } from "../../../../context/AlertContext.jsx";
import { putRecipeApi } from "../../../../helpers/recipes/putRecipe.api.js";
import { getRecipesApi } from "../../../../helpers/recipes/getRecipes.api.js";

const DashRecipeVew = () => {

    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({});
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getRecipesApi(query);
            if (response.status === 'success') setRecipes(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    const handleUpdate = async (values, load = true) => {
        if (load) setLoading(true);
        const response = await putRecipeApi(values);
        if (response.status === 'success') {
            const data = { ...recipes };
            const index = data.docs.findIndex(doc => doc._id == values._id);
            data.docs[index] = response.result;
            setRecipes(data);
            if (!load) return true;
        } else showAlert(response.error, 'error');
        if (load) setLoading(false);
    };

    return (
        <div className="column">
            <p>Filtros -- trabajar</p>
            {recipes &&
                <DashReVewTable
                    recipes={recipes.docs}
                    handleUpdate={handleUpdate}
                />
            }
            <Pager docs={recipes} setQuery={setQuery} />
        </div>
    );
};

export default DashRecipeVew;

// Trabajar filtros y actualizar la imagen.
// Trabajar filtros y actualizar la imagen.
// Trabajar filtros y actualizar la imagen.
// Trabajar filtros y actualizar la imagen.
// Trabajar filtros y actualizar la imagen.
// Trabajar filtros y actualizar la imagen.