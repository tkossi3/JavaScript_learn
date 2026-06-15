# ================================================
# TRACKER COUPE DU MONDE 2026 - Version API
# ================================================
import requests

# Fonction pour traduire le statut de l'API en français
def get_french_status(api_status):
    status_map = {
        "SCHEDULED": "En attente",
        "TIMED": "En attente",
        "LIVE": "En cours",
        "IN_PLAY": "En cours",
        "PAUSED": "Mi-temps",
        "HALF_TIME": "Mi-temps",
        "FINISHED": "Terminé",
        "SUSPENDED": "Annulé/Reporté",
        "POSTPONED": "Annulé/Reporté",
        "CANCELED": "Annulé/Reporté"
    }
    return status_map.get(api_status, api_status) # Retourne le statut original si inconnu

# 1. Configuration de l'API
URL = "https://api.football-data.org/v4/matches"
# Assurez-vous que votre token est valide et a les permissions nécessaires.
HEADERS = {"X-Auth-Token": "7ab118da0efe41788a52d025a575c1a5"} # Remplacez par votre token API

# 2. Appel à l'API
reponse = requests.get(URL, headers=HEADERS)

# 3. Vérification et extraction des données
if reponse.status_code == 200:
    donnees = reponse.json()
    matchs = donnees.get("matches", [])

    # 4. Affichage
    print("\n COUPE DU MONDE 2026")
    print("==========================================")
    if not matchs:
        print("Aucun match trouvé pour le moment.")
    else:
        for m in matchs:
            dom = m["homeTeam"]["name"]
            ext = m["awayTeam"]["name"]

            # Récupérer les scores en fonction du statut et des disponibilités
            score_h = "0"
            score_a = "0"
            if m["score"] and m["score"]["fullTime"]:
                score_h = m["score"]["fullTime"]["home"] if m["score"]["fullTime"]["home"] is not None else "0"
                score_a = m["score"]["fullTime"]["away"] if m["score"]["fullTime"]["away"] is not None else "0"
            elif m["score"] and m["score"]["halfTime"]:
                score_h = m["score"]["halfTime"]["home"] if m["score"]["halfTime"]["home"] is not None else "0"
                score_a = m["score"]["halfTime"]["away"] if m["score"]["halfTime"]["away"] is not None else "0"

            status_french = get_french_status(m["status"])

            # Le football-data.org /v4/matches API ne fournit pas de minute exacte pour les matchs en direct.
            # Nous affichons donc uniquement le statut 'En cours'.
            status_display = status_french
            if m["status"] in ["LIVE", "IN_PLAY"]:
                status_display += " (En direct)"

            print(f"{dom:<12} {score_h} - {score_a} {ext:<8} [{status_display}]")
            print("==========================================")
        print(f"Total : {len(matchs)} matchs")
else:
    print(f"Erreur {reponse.status_code} - Problème lors de l'appel à l'API. Vérifiez votre token et l'URL.")
    if reponse.status_code == 400:
        print("Détails de l'erreur: " + reponse.text)