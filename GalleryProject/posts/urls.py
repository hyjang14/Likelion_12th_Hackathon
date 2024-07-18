from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import PostViewSet, AnalyzePostView, AnalysisListView

post_router = SimpleRouter(trailing_slash=True)
post_router.register('posts', PostViewSet, basename='post')

# analysis_router = SimpleRouter(trailing_slash=False)
# analysis_router.register('analyze-post', AnalyzePostView.as_view(), basename='analyze-post')

urlpatterns = [
    path('', include(post_router.urls)),
    path('analyze-post/<int:pk>/', AnalyzePostView.as_view(), name='analyze-post'),
    path('analysis-results/', AnalysisListView.as_view(), name='analysis-results'),
]