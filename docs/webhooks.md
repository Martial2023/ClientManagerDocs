# Webhooks
Les webhooks permettent à ClientManager de notifier les serveurs en temps réel lorsque le statut d'une commande change. Cela garantit que les serveurs sont toujours informés des mises à jour importantes concernant les commandes qu'ils gèrent.

Ce webhook est appelé par le **gérant** lorsqu’une commande change de statut.  
Les serveurs reçoivent une notification push si la commande est `VALIDATE`.

### Endpoint POST /webhook/order-status
#### Headers
- `Content-Type: application/json`
- `x-webhook-secret: SECRET` (clé secrète)


#### Body
```json
{
  "orderId": "ORD123",
  "status": "VALIDATE",
  "tableId": "table123"
}
```

#### Réponses
- **200 OK**
    ```json
    {
        "ok": true
    }
    ```

- **400 Bad Request** : Requête mal formée (ex: orderId ou status manquant).
    ```json
    {
        "error": "orderId and status are required"
    }
    ```

- **401 Unauthorized** : Clé secrète invalide.
    ```json
    {
        "error": "invalid secret"
    }
    ```

- **500 Internal Server Error** : Erreur serveur.
    ```json
    {
        "error": "Internal server error"
    }
    ```

#### Exemple de requête avec curl
```bash
curl -X POST https://ton-api.onrender.com/webhook/order-status \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: VOTRE_SECRET" \
  -d '{"orderId":"ORD123","status":"VALIDATE","tableId":"table123"}'
```