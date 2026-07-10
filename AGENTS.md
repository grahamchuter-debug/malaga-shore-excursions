# Malaga Shore Excursions

World 2.0 editorial cruise planning site for malagashoreexcursions.com.

## Positioning

Gateway to Andalusia / Where Southern Spain Begins

## Destination identity (World 2.0 prototype)

Málaga is the **prototype** for the future network-wide destination logo system.

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Active mark: `logoConcept: "anchor-arch"` (switch to `"harbour-m"` to compare)
- Variants: `full` | `compact` | `mark`

Future destinations should reuse the same component with destination/descriptor/strapline config only — do not rebuild per site.

## Key paths

- Homepage: `src/app/page.tsx`
- World 2.0 components: `ChooseYourAndalusia.tsx`, `SpiritOfAndalusia.tsx`, `HonestAdvice.tsx`, `EditorsCollection.tsx`, `WowCollectionFeature.tsx`, `SignatureAndalusiaFeature.tsx`, `CruisePassengerRatings.tsx`, `CruiseHeroTrust.tsx`, `YourDayAshore.tsx`, `DestinationLogo.tsx`
- Signature placeholder: `/signature-andalusia-experience`
- Internal planning: `FUTURE_SIGNATURE_TOUR.md`
- Data: `src/data/`

## Regenerate content

```bash
npm run download:images
npm run build
```
