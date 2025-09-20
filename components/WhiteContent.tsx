"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function WhiteContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-red-700">
            ❌ Acesso Negado
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 leading-relaxed">
            Você não tem permissão para acessar este conteúdo.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
