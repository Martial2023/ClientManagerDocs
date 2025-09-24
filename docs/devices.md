# Device Management

 Enregistrer ou mettre à jour un device

### Endpoint POST /devices/register

### Description
Permet d’enregistrer un **device mobile** (Android/iOS) associé à un serveur.  
Chaque device est identifié par un **fcmToken** (Firebase Cloud Messaging).

### Headers
- `Content-Type: application/json`

### Body
```json
{
  "email": "serveur@resto.com",
  "fcmToken": "AAAABBBBCCCC",
  "platform": "android"
}
```
### Réponses
- **200 OK** : Device enregistré ou mis à jour avec succès.
  ```json
  {
    "ok": true,
    "device": {
        "id": "123",
        "serverEmail": "serveur@resto.com",
        "fcmToken": "AAAABBBBCCCC",
        "platform": "android"
    }
  }
  ```

- **400 Bad Request** : Requête mal formée (ex: email ou fcmToken manquant).
  ```json
  {
    "ok": false,
    "error": "Email and fcmToken are required"
  }
  ```

- **500 Internal Server Error** : Erreur serveur.
  ```json
  {
    "ok": false,
    "error": "Internal server error"
  }
  ```


### Exemple de requête avec curl
```bash
curl -X POST https://ton-api.onrender.com/devices/register \
  -H "Content-Type: application/json" \
  -d '{"email":"serveur@resto.com","fcmToken":"AAAABBBBCCCC","platform":"android"}'
```