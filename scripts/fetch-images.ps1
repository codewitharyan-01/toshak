# Downloads Toshak Ancillary's public product/industry photos into public/img.
# Source: toshakancillary.com (the client's own live WordPress site).

$ErrorActionPreference = "Continue"
$base = "https://toshakancillary.com/wp-content/uploads"
$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"

$map = [ordered]@{
  "public/img/logo.png"                                        = "2026/01/Untitled-design-1.png"

  "public/img/products/hopper-dryer.png"                       = "2026/10/Untitled-design-49.png"
  "public/img/products/vacuum-hopper-loader.png"               = "2026/10/10.png"
  "public/img/products/volumetric-doser-feeder.jpg"            = "2026/03/VOLUMETRIC-DOSER.jpg"
  "public/img/products/mold-temperature-controller.png"        = "2026/10/3.png"
  "public/img/products/batch-mixer.png"                        = "2026/10/8.png"
  "public/img/products/air-cooled-water-chiller.png"           = "2026/10/Untitled-design-47.png"
  "public/img/products/vertical-mixer-with-dryer.jpg"          = "2026/03/Vertical-Mixer-with-Dryer-6.jpg"
  "public/img/products/volumetric-master-batch-doser.png"      = "2026/10/8.png"
  "public/img/products/vertical-mixer.png"                     = "2026/10/1.png"
  "public/img/products/vertical-mixer-with-heater.png"         = "2026/10/2.png"
  "public/img/products/extrusion-process-controller.png"       = "2026/10/4.png"
  "public/img/products/gravimetric-dosing-blending.png"        = "2026/10/5.png"
  "public/img/products/grinder-flake-cutter.png"               = "2026/10/6.png"
  "public/img/products/water-cooled-water-scroll-chiller.png"  = "2026/10/11.png"

  "public/img/industries/plastic-processing-plants.jpg"        = "2026/03/Blown-Film-Plant-1.jpg"
  "public/img/industries/blown-film-extrusion.jpg"             = "2026/03/Blown-Film-Plant.jpg"
  "public/img/industries/injection-molding.jpg"                = "2026/03/Injection-Moulding-Machine-1.jpg"
  "public/img/industries/compounding-recycling.jpg"            = "2026/03/Pipe-Plant.jpg"

  "public/img/about/facility.jpg"                              = "2026/10/12.jpg"
  "public/img/about/vision.jpg"                                = "2026/10/6.jpg"

  "public/img/gallery/vertical-mixer-with-dryer-1.jpg"         = "2026/03/VERTICAL-MIXER-WITH-DRYER-1.jpg"
  "public/img/gallery/vertical-mixer-with-dryer-2.jpg"         = "2026/03/VERTICAL-MIXER-WITH-DRYER-2.jpg"
  "public/img/gallery/vertical-mixer-with-dryer-3.jpg"         = "2026/03/VERTICAL-MIXER-WITH-DRYER-3.jpg"
  "public/img/gallery/vertical-mixer-with-dryer-4.jpg"         = "2026/03/VERTICAL-MIXER-WITH-DRYER-4.jpg"
  "public/img/gallery/vertical-mixer-with-dryer-5.jpg"         = "2026/03/VERTICAL-MIXER-WITH-DRYER-5.jpg"
  "public/img/gallery/vertical-mixer-with-dryer.jpg"           = "2026/03/VERTICAL-MIXER-WITH-DRYER.jpg"
  "public/img/gallery/volumetric-doser-feeder.png"             = "2026/03/VOLUMETRIC-DOSER-FEEDER-1.png"
  "public/img/gallery/batch-mixer-1.png"                       = "2026/03/Batch-Mixer-1.png"
  "public/img/gallery/batch-mixer-2.jpg"                       = "2026/03/Batch-Mixer-2.jpg"
  "public/img/gallery/industrial-water-chiller.webp"           = "2026/03/industrial-water-chiller-1000x1000-1.webp"
  "public/img/gallery/mold-temperature-controller.jpg"         = "2026/03/MOLD-TEMPERATURE-CONTROLLER.jpg"
}

$ok = 0
$fail = @()
foreach ($k in $map.Keys) {
  $dst = Join-Path (Get-Location) $k
  $dir = Split-Path $dst -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  try {
    Invoke-WebRequest -Uri "$base/$($map[$k])" -OutFile $dst -UserAgent $ua -TimeoutSec 40
    $ok++
    Write-Output "OK   $k"
  } catch {
    $fail += "$($map[$k]) -> $($_.Exception.Message)"
    Write-Output "FAIL $k"
  }
}

Write-Output ""
Write-Output "Downloaded $ok of $($map.Count) images."
if ($fail.Count -gt 0) {
  Write-Output "Failures:"
  $fail | ForEach-Object { Write-Output " - $_" }
}
