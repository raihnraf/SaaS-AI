export const vaultProviders = [
  {
    id: "openai",
    name: "OpenAI",
    key: "sk-••••••••••••v9p1",
    status: "active",
    usage24h: 142.08,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG0A-klo1x4_SIONrFCe-iF4aUbf22BG71QdGUKxicUBSLNzTRez9x_alWZDUdEgHyu59OWJajlA3rV_Hs8ibxlhbRG9d1Xez_VD5RFBuaFF1QH_rQct2SWNredvwTOxrUghq-EcaS1j75i22UMZCuTlA810UoZ_r79EDHneWxWnas5cEotRRVgcZ8_RjP8tTPr_KgS83Rg8Z1RKszhNLF9y6Cx3_J2WBJsZhBgAa4KPqKa-bcesKApl7d5gT_0snJPS7Hy6D7Kso",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    key: "ant-•••••••••••8zYt",
    status: "active",
    usage24h: 89.30,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3P7XeGP6Pd5nIIvGTt9r9RxjewhuqUVf-8TC1_nDohn5p9xK-NMmC-y4eJjMzrZ2gJ_-z-JsT6SLVdP6ZBOu-8Bl9wh-Ht-JoLLsx74HbLW1ejwdSnFy4DglUI7weiOoKM756h8WzjH1olTSjaJHeQInmUqfd5lj9LSmQsV845qhcttUVYBExTHehmYDSuztkiMe6AroZu-JpSfxw1ADzzPBttKtqpxHIyEzr50H8gMEg8jJLPyC4J8S-a4IInY4wz-U0XoDK5I",
  },
  {
    id: "google",
    name: "Google Vertex AI",
    key: "vrt-•••••••••••3m9x",
    status: "error",
    usage24h: 0,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWl_nFLmeqFacXPrJp03JMqMgrBG-EmNEQgsCyInzavqDMigbt9XwXue4ey-H8msw48Pqr5UH3NI-rgUI8M7lyWLO0qj5LXQXnZod23r15TbOaQeE6O0L1pFxGrIbHQW5n0hpKlH1Jm5tZsqmGUP-AFqgEwo_oHaC_nCw4yuwPAQX5WUBw1LSKtywubZmStZOPN08WqzFbbe8g04A83eU_dPk2VQ3Q1UcYEHIOyXZv5y47F11fBnTRaBs8oxvAGAuYNFJaEBGVMbs",
  },
]

export const vaultHealth = {
  activeLinks: 8,
  lastRotation: "14h ago",
  rotationProgress: 85,
  operational: true,
}

export const auditLogs = [
  {
    id: 1,
    type: "info",
    title: "OpenAI Key Rotated",
    description: "By Administrator Terminal",
    time: "2h ago",
  },
  {
    id: 2,
    type: "default",
    title: "Vault Configuration Modified",
    description: "Environment switched to Production",
    time: "5h ago",
  },
  {
    id: 3,
    type: "error",
    title: "Failed Connection: Google Vertex",
    description: "Authentication Handshake Failure",
    time: "8h ago",
  },
]

export const securityIndex = {
  entropyScore: 94,
  entropyRating: "Excellent",
  exposureRisk: 12,
  exposureRating: "Minimal",
  protocolVersion: "v4.2",
  nextRotation: "10 days",
}

export const criticalAlert = {
  title: "Critical Connection Loss",
  description: "Vertex AI master key is no longer responding. AI workflows may be impacted.",
  provider: "Google Vertex",
}
