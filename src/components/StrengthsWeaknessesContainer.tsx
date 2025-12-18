import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { StrengthsPanel } from "./StrengthsPanel"
import { WeaknessesPanel } from "./WeaknessesPanel"

export function StrengthsWeaknessesContainer() {
  return (
    <Card className="md:col-span-2 lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">장단점</CardTitle>
        <Badge variant="info">학습 전략 제안</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
          <StrengthsPanel />
          <WeaknessesPanel />
        </div>
      </CardContent>
    </Card>
  )
}

