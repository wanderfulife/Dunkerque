export const questions = [
	{
		id: "Poste",
		text: "Zone de l’enquête",
		options: [
			{ id: 1, text: "Parvis", next: "QCo0" },
			{ id: 2, text: "Batiment Voyageur", next: "QCo0" },
			{ id: 3, text: "Quais", next: "QCo0" },
		]
	},
	{
		id: "QCo0",
		text: "Allez-vous monter dans un train ou venez vous de descendre d'un train ?",
		options: [
			{ id: 1, text: "Oui", next: "QCo1" },
			{ id: 2, text: "Non", next: "QNV1" }
		]
	},
	{
		id: "QNV1",
		text: "Quelle est la raison de votre présence en gare ?",
		options: [
			{ id: 1, text: "Vous venez attendre qq'un", next: "QNV2" },
			{ id: 2, text: "Vous accompagnez qq'un", next: "QNV2" },
			{ id: 3, text: "Renseignement / achat ou retrait de titre de transport", next: "QNV2" },
			{ id: 4, text: "Vous travaillez dans la gare", next: "QNV2" },
			{ id: 5, text: "Vous traversez la gare", next: "QNV2" },
			{ id: 6, text: "Vous venez prendre un bus ou un car", next: "QNV2" },
			{ id: 7, text: "Autre", next: "QNV1_Autre" }
		]
	},
	{
		id: "QNV1_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QNV2"
	},
	{
		id: "QNV2",
		text: "Comment êtes-vous arrivé(e) en gare de Dunkerque ?",
		options: [
			{ id: 1, text: "A pied exclusivement", next: "QNV3" },
			{ id: 2, text: "Voiture conducteur", next: "QNV2A" },
			{ id: 3, text: "Voiture passager", next: "QNV2A" },
			{ id: 4, text: "Voiture de location", next: "QNV3" },
			{ id: 5, text: "Bus ou Car", next: "QNV2B" },
			{ id: 6, text: "En scooter/moto", next: "QNV2A" },
			{ id: 7, text: "Taxis", next: "QNV3" },
			{ id: 8, text: "Vélo", next: "QNV2C" },
			{ id: 9, text: "Trottinette", next: "QNV2C" },
			{ id: 10, text: "Autre", next: "QNV2_Autre" }
		]
	},
	{
		id: "QNV2_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QNV3"
	},
	{
		id: "QNV2A",
		text: "Où avez-vous stationné votre véhicule / Où avez-vous été déposé ?",
		options: [
			{ id: 1, text: "Parking courte durée du parvis de la gare (dépose minute)", next: "QNV3" },
			{ id: 2, text: "Parking longue durée de la gare", next: "QNV3" },
			{ id: 3, text: "Centre Universitaire", next: "QNV3" },
			{ id: 4, text: "Centre Commercial", next: "QNV3" },
			{ id: 5, text: "Quai Jeanty", next: "QNV3" },
			{ id: 6, text: "Quai Mardyck", next: "QNV3" },
			{ id: 7, text: "Marin", next: "QNV3" },
			{ id: 8, text: "Place de la République", next: "QNV3" },
			{ id: 9, text: "Voirie proche gare", next: "QNV3" },
			{ id: 10, text: "Autre", next: "QNV2A_Autre" }
		]
	},
	{
		id: "QNV2A_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QNV3"
	},
	{
		id: "QNV2B",
		text: "Avec quelle ligne de bus / car ?",
		options: [
			{ id: 1, text: "Bus C1", next: "QNV3" },
			{ id: 2, text: "Bus C2", next: "QNV3" },
			{ id: 3, text: "Bus C3", next: "QNV3" },
			{ id: 4, text: "Bus C4", next: "QNV3" },
			{ id: 5, text: "Bus C4A", next: "QNV3" },
			{ id: 6, text: "Bus C6", next: "QNV3" },
			{ id: 7, text: "Bus 15", next: "QNV3" },
			{ id: 8, text: "Bus 16", next: "QNV3" },
			{ id: 9, text: "Bus 17", next: "QNV3" },
			{ id: 10, text: "Bus 18", next: "QNV3" },
			{ id: 11, text: "Bus 19", next: "QNV3" },
			{ id: 12, text: "Bus N1", next: "QNV3" },
			{ id: 13, text: "Bus N2", next: "QNV3" },
			{ id: 14, text: "Car 901", next: "QNV3" },
			{ id: 15, text: "Car 902", next: "QNV3" },
			{ id: 16, text: "Car 903", next: "QNV3" },
			{ id: 17, text: "Car 904", next: "QNV3" },
			{ id: 18, text: "Car 905", next: "QNV3" },
			{ id: 19, text: "Car 921", next: "QNV3" },
			{ id: 20, text: "Car 922", next: "QNV3" },
			{ id: 21, text: "Car 924", next: "QNV3" },
			{ id: 22, text: "Autre", next: "QNV2B_Autre" }
		]
	},
	{
		id: "QNV2B_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QNV3"
	},
	{
		id: "QNV2C",
		text: "Où stationnez-vous votre vélo/Trottinette ?",
		options: [
			{ id: 1, text: "Sur les arceaux devant la gare", next: "QNV3" },
			{ id: 2, text: "Garage à vélo sécurisé de la gare", next: "QNV3" },
			{ id: 3, text: "Je prends mon vélo/trottinette dans le train", next: "QNV3" },
			{ id: 4, text: "Autre", next: "QNV2C_Autre" }
		]
	},
	{
		id: "QNV2C_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QNV3"
	},
	{
		id: "QNV3",
		text: "Juste avant d'arriver en gare, êtes-vous parti(e) de la ville de Dunkerque ou d'une autre commune ?",
		options: [
			{ id: 1, text: "Dunkerque", next: "QNV3A" },
			{ id: 2, text: "Autre commune", next: "QNV3_" },
			{ id: 3, text: "Autre pays", next: "QNV3_" }
		]
	},
	{
		id: "QNV3_",
		text: "Quelle est votre commune/Pays de residence",
		usesCommuneSelector: true,
		next: "QCo2"
	},
	{
		id: "QNV3A",
		text: "Précisez de quelle rue de Dunkerque",
		usesStreetSelector: true,
		next: "QCo2"
	},
	{
		id: "QCo1",
		text: "Par rapport à votre voyage en train :",
		options: [
			{ id: 1, text: "Vous êtes en correspondance train-train", next: "QC1" },
			{ id: 2, text: "Vous allez prendre un train", next: "QP1" },
			{ id: 3, text: "Vous êtes descendu d'un train", next: "end" }
		]
	},
	{
		id: "QP1",
		text: "Quelle sera votre gare de destination ?",
		freeText: true,
		freeTextPlaceholder: "Nom de la gare",
		next: "QP2"
	},
	{
		id: "QP2",
		text: "Comment êtes-vous arrivé(e) en gare de Dunkerque ?",
		options: [
			{ id: 1, text: "A pied exclusivement", next: "QP4" },
			{ id: 2, text: "Voiture conducteur", next: "QP3A" },
			{ id: 3, text: "Voiture passager", next: "QP3A" },
			{ id: 4, text: "Voiture de location", next: "QP4" },
			{ id: 5, text: "Bus ou Car", next: "QP3B" },
			{ id: 6, text: "En scooter/moto", next: "QP3A" },
			{ id: 7, text: "Taxis", next: "QP3A" },
			{ id: 8, text: "Vélo", next: "QP3C" },
			{ id: 9, text: "Trottinette", next: "QP3C" },
			{ id: 10, text: "Autre", next: "QP2_Autre" }
		]
	},
	{
		id: "QP2_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QP4"
	},
	{
		id: "QP3A",
		text: "Où avez-vous stationné votre véhicule / Où avez-vous été déposé ?",
		options: [
			{ id: 1, text: "Parking courte durée du parvis de la gare (dépose minute)", next: "QP4" },
			{ id: 2, text: "Parking longue durée de la gare", next: "QP4" },
			{ id: 3, text: "Centre Universitaire", next: "QP4" },
			{ id: 4, text: "Centre Commercial", next: "QP4" },
			{ id: 5, text: "Quai Jeanty", next: "QP4" },
			{ id: 6, text: "Quai Mardyck", next: "QP4" },
			{ id: 7, text: "Marin", next: "QP4" },
			{ id: 8, text: "Place de la République", next: "QP4" },
			{ id: 9, text: "Voirie proche gare", next: "QP4" },
			{ id: 10, text: "Autre", next: "QP3A_Autre" }
		]
	},
	{
		id: "QP3A_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QP4"
	},
	{
		id: "QP3B",
		text: "Avec quelle ligne de bus / car ?",
		options: [
			{ id: 1, text: "Bus C1", next: "QP4" },
			{ id: 2, text: "Bus C2", next: "QP4" },
			{ id: 3, text: "Bus C3", next: "QP4" },
			{ id: 4, text: "Bus C4", next: "QP4" },
			{ id: 5, text: "Bus C4A", next: "QP4" },
			{ id: 6, text: "Bus C6", next: "QP4" },
			{ id: 7, text: "Bus 15", next: "QP4" },
			{ id: 8, text: "Bus 16", next: "QP4" },
			{ id: 9, text: "Bus 17", next: "QP4" },
			{ id: 10, text: "Bus 18", next: "QP4" },
			{ id: 11, text: "Bus 19", next: "QP4" },
			{ id: 12, text: "Bus N1", next: "QP4" },
			{ id: 13, text: "Bus N2", next: "QP4" },
			{ id: 14, text: "Car 901", next: "QP4" },
			{ id: 15, text: "Car 902", next: "QP4" },
			{ id: 16, text: "Car 903", next: "QP4" },
			{ id: 17, text: "Car 904", next: "QP4" },
			{ id: 18, text: "Car 905", next: "QP4" },
			{ id: 19, text: "Car 921", next: "QP4" },
			{ id: 20, text: "Car 922", next: "QP4" },
			{ id: 21, text: "Car 924", next: "QP4" },
			{ id: 22, text: "Autre", next: "QP3B_Autre" }
		]
	},
	{
		id: "QP3B_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QP4"
	}, {
		id: "QP3C",
		text: "Où stationnez-vous votre vélo/Trottinette ?",
		options: [
			{ id: 1, text: "Sur les arceaux devant la gare", next: "QP4" },
			{ id: 2, text: "Garage à vélo sécurisé de la gare", next: "QP4" },
			{ id: 3, text: "Je prends mon vélo/trottinette dans le train", next: "QP4" },
			{ id: 4, text: "Autre", next: "QP3C_Autre" }
		]
	},
	{
		id: "QP3C_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "QP4"
	},
	{
		id: "QP4",
		text: "Juste avant d'arriver en gare, êtes-vous parti(e) de la ville de Dunkerque ou d'une autre commune ?",
		options: [
			{ id: 1, text: "Dunkerque", next: "QP4A" },
			{ id: 2, text: "Autre commune", next: "QP4_" },
			{ id: 3, text: "Autre pays", next: "QP4_" }
		]
	},
	{
		id: "QP4_",
		text: "Quelle est votre commune/Pays de residence",
		usesCommuneSelector: true,
		next: "QCo2"
	},
	{
		id: "QP4A",
		text: "Précisez de quelle rue de Dunkerque",
		text: "Précisez de quelle rue de Dunkerque",
		usesStreetSelector: true,
		next: "QCo2"
	},
	{
		id: "QC1",
		text: "Quelle a été votre gare de départ ?",
		freeText: true,
		freeTextPlaceholder: "Nom de la gare",
		next: "QC2"
	},
	{
		id: "QC2",
		text: "Quelle sera votre gare de destination ?",
		freeText: true,
		freeTextPlaceholder: "Nom de la gare",
		next: "QCo2"
	},
	{
		id: "QCo2",
		text: "A quelle fréquence venez-vous dans cette gare ?",
		options: [
			{ id: 1, text: "Tous les jours de la semaine ou presque", next: "QCo3" },
			{ id: 2, text: "1 à 2 fois par semaine", next: "QCo3" },
			{ id: 3, text: "1 ou plusieurs fois par mois", next: "QCo3" },
			{ id: 4, text: "Moins d'une fois par mois", next: "QCo3" },
			{ id: 5, text: "Tous les ans", next: "QCo3" },
			{ id: 6, text: "C'est la première fois", next: "QCo3" }
		]
	},
	{
		id: "QCo3",
		text: "Quel est le motif de votre voyage ?",
		options: [
			{ id: 1, text: "Déplacement Domicile-Travail habituel", next: "end" },
			{ id: 2, text: "Déplacements professionnels occasionnel", next: "end" },
			{ id: 3, text: "Loisirs, vacances, visite d'un proche ou ami", next: "end" },
			{ id: 4, text: "Déplacement Domicile-Etudes (y compris stage)", next: "end" },
			{ id: 5, text: "Démarches administratives, médicales ou achat", next: "end" },
			{ id: 6, text: "Autres", next: "QCo3_Autre" }
		]
	},
	{
		id: "QCo3_Autre",
		text: "Précisez la raison",
		freeText: true,
		next: "end"
	}
];