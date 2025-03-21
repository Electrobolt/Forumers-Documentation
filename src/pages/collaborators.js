import React from 'react';
import Layout from '@theme/Layout';

const collaborators = [
    {
        name: 'Chemi Tchoumi Maxime',
        role: 'Team manager and Backend Developer',
        description: '',
    },
    {
        name: 'Edo Voundi Nicolas',
        role: 'FrontEnd Developer',
        description: '',
    },
    {
        name: 'KWABOU Nelda',
        role: 'FrontEnd Developer',
        description: '',
    },
];

function Collaborator({ name, role, description }) {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <h3>{name}</h3>
            <p><strong>Role:</strong> {role}</p>
            <p>{description}</p>
        </div>
    );
}

export default function Collaborators() {
    return (
        <Layout title="Collaborators">
            <div style={{ padding: '2rem' }}>
                <h1>Our Collaborators</h1>
                {collaborators.map((collaborator, index) => (
                    <Collaborator key={index} {...collaborator} />
                ))}
            </div>
        </Layout>
    );
}