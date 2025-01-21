import Card from '@/app/components/Card';

export default function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="col-span-1 flex flex-col gap-4">
        <Card title="Raccourcis">
          <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Créer une Facture
          </button>
          <button className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-2">
            Ajouter un Client
          </button>
        </Card>
      </div>

      <div className="col-span-1 grid grid-rows-2 gap-4">
        <Card title="Utilisateur Actif">
          <p>John Doe</p>
          <p>Dernière connexion : 01/01/2024</p>
        </Card>
        <Card title="Chiffres Clés">
          <ul>
            <li>Total Factures : 120</li>
            <li>Clients Actifs : 25</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
