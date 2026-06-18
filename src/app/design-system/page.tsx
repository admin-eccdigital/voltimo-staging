"use client";

import { ArrowRight, Check, Mail, Phone, Shield, Star, Zap } from "lucide-react";
import {
  Button,
  YellowLabel,
  StatCircle,
  Badge,
  Card,
  Section,
  Container,
  Heading,
  Eyebrow,
  Input,
  Textarea,
  Checkbox,
} from "@/components/brand";

function ShowcaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-10 border-b border-voltimo-border">
      <h2 className="text-xl font-bold text-voltimo-primary mb-6">{title}</h2>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-voltimo-primary mb-2">
        Voltimo Design System
      </h1>
      <p className="text-voltimo-muted mb-10">
        Showcase všech brand primitives portovaných z handoff balíku.
      </p>

      {/* ---- BUTTONS ---- */}
      <ShowcaseSection title="Button">
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <Button>Primary</Button>
          <Button variant="cta" icon={<ArrowRight />}>CTA</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <Button variant="cta" size="lg" block icon={<ArrowRight />}>
            Block CTA (full width)
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button disabled>Disabled</Button>
          <Button variant="cta" disabled>Disabled CTA</Button>
          <Button icon={<Mail />} iconPosition="left">Icon left</Button>
        </div>
      </ShowcaseSection>

      {/* ---- YELLOW LABEL ---- */}
      <ShowcaseSection title="YellowLabel">
        <div className="flex flex-wrap gap-8 items-end">
          <YellowLabel size="sm">Small label</YellowLabel>
          <YellowLabel size="md">Medium label</YellowLabel>
          <YellowLabel size="lg">Large label</YellowLabel>
        </div>
        <div className="flex flex-wrap gap-8 items-end mt-6">
          <YellowLabel lines={["Ne škola.", "Výcvik."]} size="lg" />
          <YellowLabel color="sky" lines={["Sky color", "Stacked"]} size="md" />
          <YellowLabel color="blue" size="md">Blue variant</YellowLabel>
        </div>
      </ShowcaseSection>

      {/* ---- STAT CIRCLE ---- */}
      <ShowcaseSection title="StatCircle">
        <div className="flex flex-wrap gap-6 items-center">
          <StatCircle value="10" label="dní do osvědčení" variant="yellow" />
          <StatCircle value="5" label="profesních kvalifikací" variant="blue" />
          <StatCircle value="96" label="% úspěšnost" variant="outline" />
          <StatCircle value="40" label="hodin" variant="blue" size="sm" />
          <StatCircle value="§6" label="zkouška" variant="yellow" size="sm" />
        </div>
      </ShowcaseSection>

      {/* ---- BADGE ---- */}
      <ShowcaseSection title="Badge">
        <div className="flex flex-wrap gap-4 items-center">
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="sky">Sky</Badge>
          <Badge variant="blue">Blue</Badge>
          <Badge variant="soft">Soft</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="yellow" dotCheck>DotCheck</Badge>
          <Badge variant="sky" icon={<Star />}>With icon</Badge>
        </div>
      </ShowcaseSection>

      {/* ---- CARD ---- */}
      <ShowcaseSection title="Card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <Heading level={4}>Default Card</Heading>
            <p className="text-sm text-voltimo-muted">Základní varianta karty s bílým pozadím.</p>
          </Card>
          <Card variant="dark">
            <Heading level={4} ondark>Dark Card</Heading>
            <p className="text-sm">Tmavá varianta pro zvýraznění.</p>
          </Card>
          <Card variant="featured">
            <Heading level={4}>Featured Card</Heading>
            <p className="text-sm text-voltimo-muted">Se žlutým okrajem a horním pruhem.</p>
          </Card>
        </div>
      </ShowcaseSection>

      {/* ---- SECTION + CONTAINER ---- */}
      <ShowcaseSection title="Section & Container">
        <p className="text-sm text-voltimo-muted mb-4">
          Ukázka všech tónů sekcí (light, subtle, dark, darker, yellow):
        </p>
      </ShowcaseSection>

      <Section tone="light" className="!py-6">
        <Container>
          <Eyebrow>Section tone</Eyebrow>
          <Heading level={3}>Light (default)</Heading>
        </Container>
      </Section>
      <Section tone="subtle" className="!py-6">
        <Container>
          <Eyebrow>Section tone</Eyebrow>
          <Heading level={3}>Subtle</Heading>
        </Container>
      </Section>
      <Section tone="dark" className="!py-6">
        <Container>
          <Eyebrow tone="ondark">Section tone</Eyebrow>
          <Heading level={3} ondark>Dark</Heading>
        </Container>
      </Section>
      <Section tone="darker" className="!py-6">
        <Container>
          <Eyebrow tone="ondark">Section tone</Eyebrow>
          <Heading level={3} ondark>Darker</Heading>
        </Container>
      </Section>
      <Section tone="yellow" className="!py-6">
        <Container>
          <Eyebrow tone="muted">Section tone</Eyebrow>
          <Heading level={3}>Yellow</Heading>
        </Container>
      </Section>

      {/* ---- HEADING ---- */}
      <div className="max-w-[1280px] mx-auto px-6">
        <ShowcaseSection title="Heading">
          <div className="space-y-4">
            <Heading level={1}>Heading 1 — H1</Heading>
            <Heading level={2}>Heading 2 — H2</Heading>
            <Heading level={3}>Heading 3 — H3</Heading>
            <Heading level={4}>Heading 4 — H4</Heading>
            <Heading level={5}>Heading 5 — H5</Heading>
          </div>
        </ShowcaseSection>

        {/* ---- EYEBROW ---- */}
        <ShowcaseSection title="Eyebrow">
          <div className="flex flex-wrap gap-8 items-center">
            <Eyebrow>Sky (default)</Eyebrow>
            <Eyebrow tone="muted">Muted</Eyebrow>
          </div>
          <div className="bg-voltimo-primary rounded-voltimo-md p-4 mt-4 inline-block">
            <Eyebrow tone="ondark">On dark</Eyebrow>
          </div>
        </ShowcaseSection>

        {/* ---- FORMS ---- */}
        <ShowcaseSection title="Input / Textarea / Checkbox">
          <div className="max-w-md space-y-5">
            <Input label="Jméno a příjmení" required placeholder="Jan Novák" />
            <Input label="E-mail" type="email" placeholder="jan@email.cz" hint="Potvrzení pošleme na tento e-mail." />
            <Input label="S chybou" error="Toto pole je povinné." />
            <Textarea label="Poznámka" placeholder="Napište nám cokoliv..." />
            <Checkbox label="Souhlasím se zpracováním osobních údajů za účelem kontaktu." />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Checked by default" defaultChecked />
          </div>
        </ShowcaseSection>

        {/* ---- ICONS ---- */}
        <ShowcaseSection title="Lucide Icons (sample)">
          <div className="flex flex-wrap gap-6 items-center text-voltimo-primary">
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="w-6 h-6" /><span className="text-xs text-voltimo-muted">ArrowRight</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Check className="w-6 h-6" /><span className="text-xs text-voltimo-muted">Check</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Mail className="w-6 h-6" /><span className="text-xs text-voltimo-muted">Mail</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Phone className="w-6 h-6" /><span className="text-xs text-voltimo-muted">Phone</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6" /><span className="text-xs text-voltimo-muted">Shield</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6" /><span className="text-xs text-voltimo-muted">Zap</span>
            </div>
          </div>
        </ShowcaseSection>
      </div>
    </main>
  );
}
