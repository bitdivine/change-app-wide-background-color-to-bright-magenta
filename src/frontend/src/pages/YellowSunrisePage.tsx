import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Sunrise, Waves, Mountain, Sparkles } from 'lucide-react';

export default function YellowSunrisePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Sunrise className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">yellow sunrise</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-5xl mx-auto">
            <img
              src="/assets/generated/yellow-sunrise-hero.dim_1600x600.png"
              alt="Yellow sunrise with warm tones and soft clouds"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              <Sparkles className="h-3 w-3 mr-1" />
              Natural Phenomena
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Many Faces of Dawn
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sunrise is not a singular experience. Depending on where you stand—beneath the ocean's surface, 
              at the edge of the Arctic Circle, or atop a mountain—the sun's first light transforms in 
              remarkable ways. Atmospheric conditions, water refraction, and optical illusions create 
              stunning variations of this daily phenomenon.
            </p>
          </div>
        </section>

        {/* Content Cards */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Underwater Sunrise */}
          <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src="/assets/generated/yellow-sunrise-underwater.dim_1200x800.png"
                alt="Underwater view of sunrise with light rays and surface ripples"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Waves className="h-5 w-5 text-primary" />
                <Badge variant="outline">Underwater Perspective</Badge>
              </div>
              <CardTitle className="text-2xl">Beneath the Surface</CardTitle>
              <CardDescription className="text-base">
                How sunrise appears from underwater depths
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                When viewed from beneath the water's surface, sunrise takes on an ethereal quality. 
                Light refracts through the water, creating dancing caustic patterns that shimmer 
                across the seafloor.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Observable Effects:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Snell's window: A circular cone of light above, compressed by refraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Color shift: Red and orange wavelengths absorbed first, leaving blue-green hues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Light rays: Visible beams (crepuscular rays) penetrating the water column</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Surface distortion: Waves create a constantly shifting, fragmented sun image</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Arctic Sunrise */}
          <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src="/assets/generated/yellow-sunrise-arctic.dim_1200x800.png"
                alt="Arctic sunrise with atmospheric optical illusions"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Mountain className="h-5 w-5 text-primary" />
                <Badge variant="outline">Arctic Phenomena</Badge>
              </div>
              <CardTitle className="text-2xl">The Illusion of Multiple Sunrises</CardTitle>
              <CardDescription className="text-base">
                Atmospheric effects in polar regions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In the Arctic, extreme atmospheric conditions create optical illusions where the sun 
                appears to rise and set multiple times within just a few hours—a phenomenon that has 
                mystified observers for centuries.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Observable Effects:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Temperature inversions: Cold air layers bend light, creating mirages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Fata Morgana: The sun appears stretched, layered, or duplicated vertically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Novaya Zemlya effect: Sun visible even when geometrically below the horizon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Multiple apparent sunrises: Atmospheric ducting creates false dawn events</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Key Takeaways */}
        <section className="mb-16">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Key Takeaways
              </CardTitle>
              <CardDescription>
                Essential insights about sunrise variations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Location matters:</strong> The same sunrise looks 
                    dramatically different depending on your vantage point—underwater, at sea level, or in 
                    polar regions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Refraction is key:</strong> Light bending through 
                    different mediums (water, air layers) creates most of these visual effects, from 
                    underwater caustics to Arctic mirages.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Color transformation:</strong> Water absorbs warm 
                    colors quickly, while atmospheric scattering in polar regions can intensify golden and 
                    orange hues.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                    4
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Optical illusions:</strong> Arctic atmospheric 
                    conditions can make the sun appear to rise and set multiple times over short periods—
                    not actual movement, but light bending through temperature layers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                    5
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Dynamic phenomena:</strong> These effects are 
                    constantly changing—waves alter underwater light patterns, and shifting air masses 
                    modify Arctic mirages moment by moment.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Additional Context */}
        <section className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>The Science of Sunrise Variations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These remarkable variations in sunrise appearance are governed by fundamental physics. 
                When light travels from one medium to another—air to water, or through air layers of 
                different temperatures—it bends according to Snell's law. This refraction, combined with 
                scattering and absorption, creates the diverse sunrise experiences we observe.
              </p>
              <p>
                In polar regions, the extreme cold creates stable temperature inversions where warm air 
                sits atop cold air. These layers act like atmospheric lenses, bending light in unexpected 
                ways. The result can be so dramatic that early Arctic explorers reported seeing the sun 
                weeks before it should have been geometrically visible above the horizon.
              </p>
              <p>
                Underwater, the physics are equally fascinating. Light entering water at an angle is 
                compressed into a cone—Snell's window—making the entire above-water world appear within 
                a circle of about 97 degrees. The sun, when near the horizon, appears distorted and 
                fragmented by surface waves, creating an ever-changing light show for underwater observers.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2026. Built with love using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
