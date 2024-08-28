var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

D("mihon.tools", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
  CNAME("backup", "tachibk.netlify.app.", CF_PROXY_ON),
  CNAME("local", "mihonlocal.netlify.app.", CF_PROXY_ON),
END)
