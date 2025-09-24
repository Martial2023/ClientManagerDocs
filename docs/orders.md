### Gestion des commandes d'un serveur
Gérer les commandes associées à un serveur dans un restaurant.

### Endpoint GET /servers/:email/:restaurantId/orders?date=YYYY-MM-DD

### Paramètres d’URL
- `email` *(string)* : email du serveur  
- `restaurantId` *(string/int)* : identifiant du restaurant  

### Query params
- `date` *(string, optionnel)* : date au format `YYYY-MM-DD` (par défaut aujourd’hui)

### Réponses

#### ✅ 200 OK
```json
{
  "orders": [
    {
      "id": "ORD123",
      "status": "VALIDATE",
      "createdAt": "2025-09-23T10:30:00Z",
      "table": {
        "id": 12,
        "name": "Table 5"
      }
    }
  ]
}
```

#### 200 OK (aucune commande)
```json
{
  "orders": []
}
```

#### 400 Bad Request
```json
{
  "error": "Invalid email or restaurantId"
}
```

#### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

### Exemple de requête avec curl
```bash
curl "https://ton-api.onrender.com/servers/serveur@resto.com/1/orders?date=2025-09-23"
```