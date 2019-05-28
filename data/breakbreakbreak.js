/* global spokenweb */

spokenweb.value('RESOURCES', [{
  "@id": "SGWU-audio",
  "@type": "oa:Annotation",
        "label": "John Wieners at SGWU, 1966",
  "motivation": "performance",
  "resource": {
    "@id": "https://montreal.spokenweb.ca/wp-content/uploads/2011/02/john_wieners_i006-11-119.mp3",
    "@type": "dctypes:Sound",
    "format": "audio/mpeg"
  }
}]);

spokenweb.value('MANIFESTS', [
{
  "@id": "SGWU-Manifest",
  "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'John Wieners at SGWU, 1966',
        "description": 'John Wieners reads from Ace of Pentacles (1974), Autumn in New York (published in 1985 as Selected Poems, 1958-1984).',
        "metadata": [
            {"title": 'John Wieners at SGWU, 1966'},
            {"Tape Catalog number": "I006-11-119"},
            {"Tape Labels": "one 5”, single track reel, at 7 1/2 ips, mono"},
            {"Duration": "21:42.91"},
            {"Sound quality": "Good"},
            {"Speakers": "John Wieners (Introduction cut)"},
            {"Venue": 'Hall Building - Art Gallery'},
            {"Date": "October 8, 1966"},
            {"Supplemental Material": "https://montreal.spokenweb.ca/wp-content/uploads/2011/02/G1966-10-12-p6.jpg"},
            {"Original Source": "https://montreal.spokenweb.ca/sgw-poetry-readings/john-wieners-at-sgwu-1966/"}
        ],
  "resources": ["SGWU-audio"],
  "layers": ["timestamps"],
  "sequences": [{
    "@id": "SGWU-sequence",
    "@type": "sc:Sequence",
    "canvases": [{
      "label": "1",
      "@id": "SGWU1",
      "width": 1000,
      "height": 1000,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "SGWU1",
        "resource": {
          "format": "image/jpeg",
          "height": 1000,
          "width": 1000,
          "@id": "https://montreal.spokenweb.ca/wp-content/uploads/2014/12/I0006_11_0119_tape.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"audio",
        "@type":"oa:Annotation",
        "label": "Program",
        "motivation": "sc:painting",
        "resource": "SGWU-audio#t=0,1272.91",
        "on": "SGWU1",
        "within": "timestamps"
      },{
        "@id": "program-notes",
        "@type": "sc:AnnotationList",
        "label": "Program Notes",
        "@list": [
        {
          "@id": 00101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "Invocation to Summer." [Recording starts mid-poem "... our time here is enchanted, what more is there to say, the flowers are perfect, they do not die..."]',
          "on": [
          "SGWU-audio#t=0,69",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 10101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "\"Invitation Au Voyage II.\" Do you know that poem of Baudelaire's? It's something at the end of the world. He's speaking to his beloved, very simple. You know, lots of the German Romanticism was very simple.",
          "on": [
          "SGWU-audio#t=69,90",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 20101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "Invitation Au Voyage II."',
          "on": [
          "SGWU-audio#t=90,195",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 30101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "Well, let's go back to the old poems, then, that have been published. Stuart Montgomery, well, it doesn't matter. But that— I can send it off to England to the Fulcrum Press who's been doing a lot of Basil Bunting, an English poet of '65, resuscitated in America again. It's about time.",
          "on": [
          "SGWU-audio#t=195,224",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 40101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "Long Nook."',
          "on": [
          "SGWU-audio#t=224,278",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 50101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "I'll just make random choices. \"At Big Sur.\"",
          "on": [
          "SGWU-audio#t=278,293",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 60101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "At Big Sur."',
          "on": [
          "SGWU-audio#t=293,312",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 70101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": '"Louise."',
          "on": [
          "SGWU-audio#t=312,321",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 80101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "Louise."',
          "on": [
          "SGWU-audio#t=321,348",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 90101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": '"The Pool of Light."',
          "on": [
          "SGWU-audio#t=348,353",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 100101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "The Pool of Light."',
          "on": [
          "SGWU-audio#t=353,374",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 110101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'For Mari—No, this is "For Marion."',
          "on": [
          "SGWU-audio#t=374,379",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 120101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": 'Reads "For Marion."',
          "on": [
          "SGWU-audio#t=379,425",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 130101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `"The Mermaid Song." I'm going to pass on that one. Forgive me for this. I thought the other poems would carry me through, but I'm reading what seems in keeping with the mood of tonight, which seems to be more lyrical. "The Serpent's Hiss."`,
          "on": [
          "SGWU-audio#t=425,472",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 140101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `Reads "The Serpent's Hiss."`,
          "on": [
          "SGWU-audio#t=472,517",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 150101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `And this is called "Tuesday 5:00 PM"`,
          "on": [
          "SGWU-audio#t=517,523",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 160101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `Reads "Tuesday 5:00 PM" [published as “Tuesday 7:00 PM”]`,
          "on": [
          "SGWU-audio#t=523,645",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 170101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `I'm going to read the "The Imperatrice." Ace of Pentacles is a card in the Tarot deck, but the book should be called ‘pente’ which are the words that appeared in a hypnogogic vision. Hypnogogic is the state between waking and sleeping. It's what Jung practiced and his Marie Louise Franz would take down the things that came to him in the state between waking and sleeping and the letters ‘pente’ appeared in my— in that state and I didn't know what they meant, so I kept hunting around and I made the word 'pentacles' out of it, and somebody said why don't you call it "Ace of Pentacles"? And we made a whole thing about the Tarot deck, but that's not the title of the book. It should be ‘pente’ and that's from the Greek which is ‘wall.’ And I'd like have as a frontispiece for the book William Blake's "The Chimney Sweep," the second version of that from the Songs of Experience, when he says that my mother and father have gone up to the church to pray, and they make a heaven of my misery. That kind of thing. But the Imperatrice is another card from the Tarot deck. It's the third card of the deck.`,
          "on": [
          "SGWU-audio#t=645,729",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 180101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `Reads "The Imperatrice."`,
          "on": [
          "SGWU-audio#t=729,818",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 190101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `There is something else I thought I'd like to read after that one. I'll read a poem for Sylvia Plath who was an American poet who married an Englishman, Ted Hughes, and had mental troubles and wrote a novel about it called The Bell Jar under a pseudonym, Victoria Lucas, so as not to embarrass her mother, and then thing became too much for her and I think in 1963, she did away with herself in London, and it was a great loss. Some people feel that and some do not, they feel that at least— Lowell has written an introduction to her poems posthumously printed called Ariel, and then her first book was The Colossus. But Victoria Lucas was— The Bell Jar was— You could buy it through William Hiderman and it came down from Canada to the United States and it's never been printed in the country. This is "The Suicide."`,
          "on": [
          "SGWU-audio#t=818,906",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        },
        {
          "@id": 200101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": `Reads "The Suicide."`,
          "on": [
          "SGWU-audio#t=906,1017",
          "SGWU1#xywh=0,0,1000,1000"
          ]
        }
        ]
      }]
    }]
  }]
}])

spokenweb.value('TEXT', [{}])

spokenweb.value('AGENTS', [{
  "@id": "spokenweb/user/01",
  "@type": "foaf:Person",
  "foaf:name": "Agent 1"
}]);

spokenweb.value('ESSAYS', [{}])

spokenweb.value('ANNOTATIONS', [{}])