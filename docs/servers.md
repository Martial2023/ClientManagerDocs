# Gestion des serveurs
Gérer la connexion d'un serveur à son ou ses restaurants

### Endpoint GET /servers/:email/restaurants
### Paramètres
- `email` (string, requis) : L'email du serveur.

### Description
Permet de récupérer la liste des restaurants associés à un serveur via son email.
Le serveur est identifié par son email et est préalablement ajouté par son manager à l'espace de travail du restaurant en l'associant à une table.

### Réponses
- **200 OK** : Liste des restaurants récupérée avec succès.
    ```json
    {
        "ok": true,
        "restaurants": [
            {
                "id": "resto123",
                "name": "Le Gourmet",
                "address": "123 Rue de la Paix, Paris",
                "logo": "https://example.com/logo.png"
            },
            {
                "id": "resto456",
                "name": "La Bonne Table",
                "address": "456 Avenue des Champs, Lyon",
                "logo": "https://example.com/logo.png"
            }
        ]
    }
    ```

- **500 Internal Server Error** : Erreur serveur.
    ```json
    {
        "error": "Internal server error"
    }
    ```

### Exemple de requête avec curl
```bash
curl -X GET "https://ton-api.onrender.com/servers/serveur@rest/restaurants"
```