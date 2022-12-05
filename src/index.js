import React from 'react';
import { createRoot } from 'react-dom/client';
import { EveryPuppy } from './components/EveryPuppy';
import { fetchAllPlayers } from './components/FetchPlayers';
import { RenderAllPlayers, renderNewPlayerForm } from './components/RenderPlayers';
/*const puppies = [

    { "id": 10004, "name": "Anise", "breed": "Australian Cattle Dog / Labrador Retriever", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.562Z", "updatedAt": "2022-12-05T02:18:13.562Z", "teamId": 554, "cohortId": 294 },
    { "id": 10005, "name": "Bert", "breed": "Great Pyrenees / Weimaraner", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.562Z", "updatedAt": "2022-12-05T02:18:13.562Z", "teamId": 554, "cohortId": 294 },
    { "id": 10006, "name": "Crumpet", "breed": "American Staffordshire Terrier", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.562Z", "updatedAt": "2022-12-05T02:18:13.562Z", "teamId": 554, "cohortId": 294 },
    { "id": 10007, "name": "Daphne", "breed": "German Shepherd", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10008, "name": "Duncan", "breed": "Collie", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10010, "name": "Gina", "breed": "Labrador Retriever / Chow Chow", "status": "bench", "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10012, "name": "Jack", "breed": "Chihuahua / Miniature Poodle", "status": "bench", "imageUrl": "http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10009, "name": "Filbert", "breed": "Shetland Sheepdog / Border Collie", "status": "field", "imageUrl": "http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10011, "name": "Huck", "breed": "Miniature Poodle / Shih Tzu", "status": "bench", "imageUrl": "http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 },
    { "id": 10013, "name": "Kenny", "breed": "Golden Retriever / Boxer", "status": "bench", "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg", "createdAt": "2022-12-05T02:18:13.563Z", "updatedAt": "2022-12-05T02:18:13.563Z", "teamId": 554, "cohortId": 294 }

]*/

const MainComponent = () => {
    return (
        <div>
            <h1>Welcome to Puppy Bowl!</h1>
            <RenderAllPlayers />
        </div>
    );
};

const appElement = document.querySelector('#app');

const root = createRoot(appElement);

root.render(<MainComponent />)