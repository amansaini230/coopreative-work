# ShramSetu

ShramSetu is a cooperative-owned marketplace for household, community, and farm-support services. It connects customers with verified labour cooperative members and gives workers and society administrators dedicated portals.

## Run

Open `index.html` directly in a browser. No installation or build step is required. You can also run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Portals and workflows

- Customers can find verified household and farm-support workers, book services, record UPI references, review invoices, rate work, and raise service issues.
- Workers can manage availability, accept job alerts, update schedules, view their 90% direct earnings share, and request emergency assistance.
- Society administrators can review member credentials and verification history, manage service orders, acknowledge welfare alerts, and resolve disputes.
- Locality matching uses stored Karnataka locality coordinates and a 15 km service radius; Mandya is included for rural farm and irrigation services.
- Service invoices show a transparent 90% worker share and 10% cooperative reserve.

Marketplace records are saved in this browser and remain available after a refresh. The static app does not connect to live UPI settlement, maps, SMS/WhatsApp, or a remote database; those integrations require their corresponding backend services and credentials.
