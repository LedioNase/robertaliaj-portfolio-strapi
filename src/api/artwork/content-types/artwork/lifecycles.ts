// src/api/artwork/content-types/artwork/lifecycles.ts

export default {
  async afterUpdate(event) {
    console.log('🔵 Lifecycle hook triggered - afterUpdate');

    const { result, params } = event;

    console.log('📄 Artwork ID:', result?.documentId);
    console.log('📄 Artwork title:', result?.title);
    console.log('📌 Published at:', result?.publishedAt);

    // Check if the artwork is published
    if (result?.publishedAt) {
      console.log('✅ Artwork is published, checking homepage...');

      try {
        // Find the homepage in Strapi 5
        const homepages = await strapi.documents('api::homepage.homepage').findMany({
          populate: ['artworks'],
        });

        const homepage = homepages?.[0]; // Single type, so first result

        console.log('🏠 Homepage found:', homepage?.documentId);
        console.log('📚 Current artworks count:', homepage?.artworks?.length || 0);

        if (!homepage) {
          console.log('❌ No homepage found');
          return;
        }

        // Get current artwork document IDs in the relation
        const currentArtworkIds = homepage.artworks?.map(a => a.documentId) || [];
        console.log('📝 Current artwork IDs:', currentArtworkIds);

        // Check if this artwork is already in the relation
        if (!currentArtworkIds.includes(result.documentId)) {
          console.log('➕ Adding artwork to homepage...');

          // Add this artwork to the relation in Strapi 5
          await strapi.documents('api::homepage.homepage').update({
            documentId: homepage.documentId,
            data: {
              artworks: {
                connect: [{ documentId: result.documentId }],
              },
            },
          });

          console.log(`✅ Successfully added artwork "${result.title}" to homepage`);
        } else {
          console.log('ℹ️ Artwork already in homepage relation');
        }
      } catch (error) {
        console.error('❌ Error auto-adding artwork to homepage:', error);
      }
    } else {
      console.log('⚠️ Artwork is not published');
    }
  },

  async afterDelete(event) {
    console.log('🔴 Lifecycle hook triggered - afterDelete');

    const { result } = event;

    try {
      const homepages = await strapi.documents('api::homepage.homepage').findMany({
        populate: ['artworks'],
      });

      const homepage = homepages?.[0];

      if (!homepage) {
        console.log('❌ No homepage found');
        return;
      }

      // Check if artwork was in the relation
      const wasInRelation = homepage.artworks?.some(a => a.documentId === result.documentId);

      if (wasInRelation) {
        console.log('➖ Removing artwork from homepage...');

        await strapi.documents('api::homepage.homepage').update({
          documentId: homepage.documentId,
          data: {
            artworks: {
              disconnect: [{ documentId: result.documentId }],
            },
          },
        });

        console.log(`✅ Automatically removed artwork "${result.title}" from homepage`);
      }
    } catch (error) {
      console.error('❌ Error auto-removing artwork from homepage:', error);
    }
  },
};
