import { MapPin } from "lucide-react";

const regions = [
  { name: "Chanchamayo", altitude: "1,200 - 1,800 m" },
  { name: "Satipo", altitude: "1,000 - 1,600 m" },
  { name: "Villa Rica", altitude: "1,400 - 2,000 m" },
  { name: "Oxapampa", altitude: "1,800 - 2,200 m" },
];

const OriginsSection = () => {
  return (
    <section id="origins" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Direct from the Source
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Coffee from the Central Jungle of Peru
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Coffee from the Central Jungle comes from one of the most recognized coffee
              regions in the country, covering areas such as Chanchamayo, Satipo, Villa Rica
              and Oxapampa. This area is characterized by its humid tropical climate, 
              nutrient-rich soils and altitudes ranging from 900 to 1,800 meters above sea level.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Harvest Months:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    In the Central Jungle, the main harvest takes place between May and
                    September, with a peak between June and August.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Some areas may have an intermediate or late harvest until October,
                    depending on altitude and microclimate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Regions */}
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{region.name}</h4>
                    <p className="text-xs text-muted-foreground">Altitude: {region.altitude}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Map */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524350876685-274059332603?w=800&q=80"
                alt="Peru coffee region map"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-medium rounded-lg">
                  Coffee regions of the Central Jungle
                </span>
              </div>
            </div>

            {/* Video Embed Placeholder */}
            <div className="mt-6 p-4 bg-muted/50 rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                🎬 Discover the coffee route through the central jungle of Peru
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginsSection;
