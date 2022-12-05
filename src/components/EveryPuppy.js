import React from 'react';
import { createRoot } from 'react-dom/client';

const playerContainer = document.getElementById('all-players-container');

export const EveryPuppy = (props) => {
    console.log(props);

    <div class="single-player-card">
        <div class="header-info">
            <p class="pup-title">{pup.name}</p>
            <p class="pup-number">{pup.id}</p>
        </div>
        <img src="{pup.imageUrl}" alt="photo of {pup.name} the puppy" />
        <button class="detail-button" data-id={pup.id}>See details</button>
        <button class="detail-button" data-id={pup.id}>Remove from roster</button>
    </div>

};

